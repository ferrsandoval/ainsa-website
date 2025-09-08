# 🚀 Guía de Deployment - AINSA Website para SiteGround

## 📋 Pasos para Deploy en SiteGround

### 1. **Preparar el Build de Producción**
```bash
# Instalar dependencias
npm install

# Crear build optimizado
npm run build:prod
```

### 2. **Archivos a Subir a SiteGround**
Después del build, subir todo el contenido de la carpeta `dist/` a la raíz del dominio en SiteGround:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [otros archivos estáticos]
├── .htaccess
├── robots.txt
└── sitemap.xml
```

### 3. **Configuración en SiteGround**

#### **A. Subir Archivos**
1. Acceder al **File Manager** de SiteGround
2. Navegar a `public_html/` (o la carpeta del dominio)
3. Subir todos los archivos de `dist/`
4. Asegurar que `.htaccess` esté en la raíz

#### **B. Configurar Dominio**
1. En **Site Tools** → **Domain** → **Domain Manager**
2. Configurar el dominio principal
3. Asegurar que apunte a `public_html/`

#### **C. SSL Certificate**
1. En **Site Tools** → **Security** → **SSL Manager**
2. Activar **Let's Encrypt** SSL
3. Forzar HTTPS (ya configurado en .htaccess)

### 4. **Verificaciones Post-Deployment**

#### **A. Funcionalidad Básica**
- [ ] Página principal carga correctamente
- [ ] Navegación entre páginas funciona
- [ ] Botones de WhatsApp funcionan
- [ ] Formularios de contacto operativos
- [ ] Responsive design en móviles

#### **B. SEO y Performance**
- [ ] Meta tags se cargan correctamente
- [ ] Sitemap accesible en `/sitemap.xml`
- [ ] Robots.txt accesible en `/robots.txt`
- [ ] Compresión GZIP activa
- [ ] Cache headers funcionando

#### **C. Herramientas de Verificación**
```bash
# Verificar sitemap
https://inoxidablesainsa.mx/sitemap.xml

# Verificar robots.txt
https://inoxidablesainsa.mx/robots.txt

# Verificar meta tags
https://inoxidablesainsa.mx/

# Test de velocidad
https://pagespeed.web.dev/
```

### 5. **Configuración de Google Services**

#### **A. Google Search Console**
1. Verificar propiedad del dominio
2. Enviar sitemap: `https://inoxidablesainsa.mx/sitemap.xml`
3. Configurar monitoreo de indexación

#### **B. Google Analytics 4**
1. Crear propiedad GA4
2. Obtener Measurement ID
3. Agregar código de tracking (si se implementa)

#### **C. Google My Business**
1. Crear perfil de negocio
2. Verificar dirección física
3. Agregar fotos y horarios

### 6. **Optimizaciones Adicionales**

#### **A. CDN (Opcional)**
- Activar **Cloudflare** en SiteGround
- Configurar cache rules
- Optimizar imágenes automáticamente

#### **B. Backup Automático**
- Configurar backups diarios en SiteGround
- Guardar backups antes de actualizaciones

#### **C. Monitoreo**
- Configurar alertas de uptime
- Monitorear Core Web Vitals
- Revisar logs de errores regularmente

### 7. **Mantenimiento**

#### **A. Actualizaciones**
```bash
# Para actualizar el sitio:
npm run build:prod
# Subir nuevos archivos de dist/ a SiteGround
```

#### **B. Monitoreo SEO**
- Revisar posiciones en Google Search Console
- Actualizar sitemap si se agregan páginas
- Monitorear Core Web Vitals

#### **C. Backup y Seguridad**
- Mantener backups actualizados
- Actualizar dependencias regularmente
- Monitorear logs de seguridad

## 🔧 Configuraciones Técnicas

### **Variables de Entorno (si se necesitan)**
```env
VITE_APP_URL=https://inoxidablesainsa.mx
VITE_APP_ENV=production
```

### **Configuración de .htaccess**
El archivo `.htaccess` incluye:
- ✅ Compresión GZIP
- ✅ Cache headers optimizados
- ✅ React Router support
- ✅ Security headers
- ✅ Error pages personalizadas

### **Performance Optimizations**
- ✅ Code splitting automático
- ✅ Tree shaking habilitado
- ✅ Minificación de CSS/JS
- ✅ Optimización de imágenes
- ✅ Lazy loading de componentes

## 📞 Soporte

### **En caso de problemas:**
1. Verificar logs de error en SiteGround
2. Revisar configuración de .htaccess
3. Verificar que todos los archivos se subieron correctamente
4. Contactar soporte de SiteGround si es necesario

### **Contacto Técnico:**
- **Desarrollo**: EasyDevs
- **Website**: https://easydevs.us
- **Email**: [email de contacto]

---

> **Nota importante**: Asegurar que el dominio `ainsa.com.mx` esté correctamente configurado y apunte a la carpeta donde se subieron los archivos.
