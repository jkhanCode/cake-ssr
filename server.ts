import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

async function createServer() {
  const app = express();

  let vite: any;
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(sirv(path.resolve(__dirname, 'dist/client'), { extensions: [] }));
  }

  // SSR Route Handler
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;
      let render: () => { html: string };

      if (!isProduction) {
        // Read index.html dynamically in dev
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        // Apply Vite HTML transforms (injects @vite/client, React preamble, etc.)
        template = await vite.transformIndexHtml(url, template);
        // Load the server entry module via Vite SSR loader
        const entry = await vite.ssrLoadModule('/src/entry-server.tsx');
        render = entry.render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        // In production, server entry is pre-bundled in dist/server
        const entry = await import(path.resolve(__dirname, 'dist/server/entry-server.js') as any);
        render = entry.render;
      }

      // Render the full React component tree to an HTML string
      const { html: appHtml } = render();

      // Inject the rendered markup into the DOM placeholder
      const html = template.replace('<!--ssr-outlet-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
    } catch (e: any) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('SSR render error:', e);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Cakelab SSR Server listening on http://0.0.0.0:${PORT}`);
  });
}

createServer();
