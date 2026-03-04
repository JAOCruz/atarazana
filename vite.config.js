import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  // public/ is served automatically by Vite at root (contains images, plugins, styles, js, font)
  publicDir: 'public',

  plugins: [
    viteStaticCopy({
      targets: [
        {
          // HTML pages — copied to dist root
          src: [
            'about.html',
            'blog.html',
            'contact.html',
            'menu.html',
            'elements.html',
            'index.html',
            'header.html',
            'footer.html',
            'reservation.html',
            'reservaciones.html',
            'reservacion-exitosa.html',
            'tour-operadores.html',
            'event-*.html',
            'test-menu.html'
          ],
          dest: ''
        }
      ]
    })
  ]
});
