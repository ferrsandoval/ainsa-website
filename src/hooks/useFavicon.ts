import { useEffect } from 'react';

export function useFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const faviconPath = isDark ? '/favicon-dark.png' : '/favicon.png';
      
      // Actualizar favicon principal
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = faviconPath;
      }
      
      // Actualizar apple-touch-icon
      const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      if (appleTouchIcon) {
        appleTouchIcon.href = faviconPath;
      }
      
      // Actualizar todos los favicons PNG
      const pngFavicons = document.querySelectorAll('link[rel="icon"][type="image/png"]');
      pngFavicons.forEach(link => {
        const htmlLink = link as HTMLLinkElement;
        htmlLink.href = faviconPath;
      });
    };

    // Actualizar favicon inicial
    updateFavicon();

    // Observar cambios en el tema
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
}
