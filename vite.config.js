import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Build-time HTML partials: <!-- include: header.html --> is replaced with the
// contents of that file, so header/footer/forms ship inside each page instead
// of being fetched with JavaScript after load.
const INCLUDE_RE = /<!--\s*include:\s*([\w.-]+\.html)\s*-->/g;

function inlinePartials(html) {
  return html.replace(INCLUDE_RE, (_, file) =>
    inlinePartials(readFileSync(resolve(__dirname, 'partials', file), 'utf-8'))
  );
}

export default defineConfig({
  // public/ is served automatically by Vite at root (contains images, plugins, styles, js, font)
  publicDir: 'public',

  plugins: [
    {
      // Dev server: resolve includes on every HTML request
      name: 'html-partials',
      transformIndexHtml: { order: 'pre', handler: inlinePartials }
    },
    viteStaticCopy({
      targets: [
        {
          // HTML pages — copied to dist root with partials inlined
          src: [
            '404.html',
            'about.html',
            'blog.html',
            'contact.html',
            'elements.html',
            'index.html',
            'reservaciones.html',
            'reservacion-exitosa.html',
            'tour-operadores.html',
            'event-*.html',
            'test-menu.html'
          ],
          dest: '',
          transform: (content) => inlinePartials(content)
        }
      ]
    })
  ]
});
