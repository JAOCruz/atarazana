import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
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
            'event-*.html'
          ],
          dest: ''
        }
      ]
    })
  ]
});
