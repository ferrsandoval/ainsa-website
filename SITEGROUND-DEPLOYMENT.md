# 🚀 Guía de Despliegue en SiteGround - AINSA Website

## 📋 **Resumen del Proyecto**
- **Sitio**: AINSA - Acero Inoxidable & Metales Industriales
- **URL**: https://inoxidablesainsa.mx/
- **Tecnología**: React + Vite + TypeScript
- **Hosting**: SiteGround
- **Build**: Optimizado para producción

---

## 🎯 **Archivos Listos para Despliegue**

### 📁 **Carpeta `dist/` - Contenido Completo**
```
dist/
├── .htaccess                 # Configuración Apache
├── index.html               # Página principal
├── robots.txt               # Directivas para crawlers
├── sitemap.xml              # Mapa del sitio
├── site.webmanifest         # PWA manifest
├── browserconfig.xml        # Configuración Microsoft
├── favicon.ico              # Favicon básico
├── favicon.png              # Favicon claro
├── favicon-dark.png         # Favicon oscuro
└── assets/                  # Archivos optimizados
    ├── index-4fX6UQUi.js    # JavaScript principal
    ├── index-Dqf88PlZ.css   # Estilos CSS
    ├── vendor-BsIpK1TX.js   # Dependencias
    ├── motion-DSxrfF7t.js   # Animaciones
    ├── ui-BAqOApsu.js       # Componentes UI
    ├── icons-C4lS9qkI.js    # Iconos
    └── logos/               # Imágenes optimizadas
```

---

## 🔧 **Pasos para Despliegue en SiteGround**

### **1. Acceder al Panel de Control**
1. Iniciar sesión en [SiteGround](https://www.siteground.com/)
2. Ir a **"My Accounts"** → **"Go to cPanel"**
3. Buscar **"File Manager"** en el cPanel

### **2. Navegar al Directorio Correcto**
- **Dominio principal**: `public_html/`
- **Subdominio**: `public_html/subdominio/`
- **Dominio addon**: `public_html/dominio.com/`

### **3. Limpiar Directorio (Opcional)**
```bash
# Si hay archivos anteriores, hacer backup primero
# Luego eliminar archivos antiguos del sitio
```

### **4. Subir Archivos**
1. **Seleccionar TODOS los archivos** de la carpeta `dist/`
2. **Subir vía File Manager** o **FTP**
3. **Verificar que .htaccess esté en la raíz**

### **5. Verificar Permisos**
- **Archivos**: `644`
- **Carpetas**: `755`
- **.htaccess**: `644`

---

## ⚙️ **Configuración Específica de SiteGround**

### **📄 Archivo .htaccess Incluido**
```apache
# GZIP Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache Headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# React Router Support
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### **🔒 Configuración de Seguridad**
- **SSL**: Activar en SiteGround
- **Firewall**: Configurado automáticamente
- **Backup**: Activar backups automáticos

---

## 🧪 **Verificación Post-Despliegue**

### **1. URLs de Prueba**
- ✅ **Homepage**: https://inoxidablesainsa.mx/
- ✅ **Productos**: https://inoxidablesainsa.mx/#productos
- ✅ **Nosotros**: https://inoxidablesainsa.mx/#nosotros
- ✅ **Contacto**: https://inoxidablesainsa.mx/#contacto

### **2. Funcionalidades a Verificar**
- ✅ **Navegación**: Menú responsive
- ✅ **Tema**: Cambio claro/oscuro
- ✅ **Favicon**: Dinámico según tema
- ✅ **WhatsApp**: Botón flotante
- ✅ **Formularios**: Funcionamiento
- ✅ **SEO**: Meta tags dinámicos

### **3. Herramientas de Verificación**
- **Google PageSpeed**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Google Search Console**: Verificar sitemap
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

---

## 📊 **Optimizaciones Incluidas**

### **🚀 Performance**
- **Code Splitting**: Carga por chunks
- **Tree Shaking**: Eliminación de código no usado
- **Minificación**: CSS y JS optimizados
- **GZIP**: Compresión activada
- **Cache**: Headers configurados

### **📱 PWA Ready**
- **Manifest**: site.webmanifest incluido
- **Service Worker**: Preparado para implementar
- **Offline**: Estructura lista

### **🔍 SEO Optimizado**
- **Meta Tags**: Dinámicos por página
- **Open Graph**: Facebook/LinkedIn
- **Twitter Cards**: Twitter optimizado
- **Structured Data**: JSON-LD incluido
- **Sitemap**: XML generado automáticamente

---

## 🆘 **Solución de Problemas**

### **Error 500 - Internal Server Error**
```bash
# Verificar permisos de .htaccess
chmod 644 .htaccess

# Verificar sintaxis de .htaccess
# Comentar líneas problemáticas
```

### **Páginas no cargan (404)**
```bash
# Verificar que .htaccess esté en la raíz
# Verificar configuración de mod_rewrite
```

### **CSS/JS no cargan**
```bash
# Verificar rutas en assets/
# Verificar permisos de archivos
```

### **Favicon no aparece**
```bash
# Verificar que favicon.png esté en la raíz
# Limpiar cache del navegador
```

---

## 📞 **Soporte Técnico**

### **SiteGround Support**
- **Chat**: 24/7 disponible
- **Ticket**: Sistema de tickets
- **Phone**: Soporte telefónico

### **Documentación**
- **SiteGround KB**: https://www.siteground.com/kb/
- **Apache Docs**: https://httpd.apache.org/docs/
- **React Router**: https://reactrouter.com/

---

## ✅ **Checklist Final**

- [ ] **Archivos subidos** a public_html/
- [ ] **.htaccess** en la raíz del dominio
- [ ] **SSL** activado y funcionando
- [ ] **Homepage** carga correctamente
- [ ] **Navegación** funciona en todas las páginas
- [ ] **Tema claro/oscuro** funciona
- [ ] **Favicon** aparece correctamente
- [ ] **WhatsApp** botón funciona
- [ ] **Formularios** envían correctamente
- [ ] **SEO** meta tags aparecen
- [ ] **Sitemap** accesible en /sitemap.xml
- [ ] **Robots.txt** accesible en /robots.txt
- [ ] **Performance** optimizado
- [ ] **Mobile** responsive

---

## 🎉 **¡Despliegue Completado!**

**El sitio AINSA está listo para producción en SiteGround.**

**URL Final**: https://inoxidablesainsa.mx/

**Desarrollado por**: EasyDevs (https://easydevs.us)
