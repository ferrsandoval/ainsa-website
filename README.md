# 🏭 AINSA - Acero Inoxidable & Metales Industriales

[![GitHub](https://img.shields.io/badge/GitHub-ainsa--website-blue?style=flat-square&logo=github)](https://github.com/ferrsandoval/ainsa-website)
[![Website](https://img.shields.io/badge/Website-inoxidablesainsa.mx-green?style=flat-square)](https://inoxidablesainsa.mx)
[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6+-purple?style=flat-square&logo=vite)](https://vitejs.dev/)

## 📋 Descripción

Sitio web corporativo para **AINSA** (Acero Inoxidable & Metales Industriales), una empresa líder en la distribución de materias primas industriales en México. El sitio presenta un diseño moderno, responsive y optimizado para SEO.

## ✨ Características

### 🎨 **Diseño y UX**
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Tema Claro/Oscuro**: Sistema de temas dinámico
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **UI Moderna**: Componentes Radix UI con Tailwind CSS

### 🚀 **Performance**
- **Build Optimizado**: Code splitting y tree shaking
- **Lazy Loading**: Carga diferida de componentes
- **Compresión GZIP**: Archivos optimizados para producción
- **Cache Headers**: Configuración de caché para mejor performance

### 🔍 **SEO Optimizado**
- **Meta Tags Dinámicos**: Por página con Open Graph y Twitter Cards
- **Structured Data**: JSON-LD para mejor indexación
- **Sitemap XML**: Generado automáticamente
- **Robots.txt**: Configurado para crawlers
- **Favicon Dinámico**: Cambia según el tema

### 📱 **PWA Ready**
- **Web App Manifest**: Configurado para instalación
- **Service Worker**: Preparado para funcionalidad offline
- **Iconos Adaptativos**: Para diferentes dispositivos

### 🛡️ **Seguridad**
- **Headers de Seguridad**: XSS, CSRF y clickjacking protection
- **HTTPS Ready**: Configurado para SSL
- **Validación de Entrada**: Formularios seguros

## 🏗️ **Tecnologías**

### **Frontend**
- **React 18+** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconografía

### **SEO & Performance**
- **Dynamic Meta Tags** - SEO por página
- **JSON-LD** - Datos estructurados
- **Sitemap Generator** - XML automático
- **Favicon System** - Dinámico por tema

### **Deployment**
- **SiteGround Ready** - Configuración optimizada
- **Apache .htaccess** - Rewrite rules y cache
- **Build Scripts** - Automatización de producción

## 📁 **Estructura del Proyecto**

```
ainsa-website/
├── public/                 # Archivos estáticos
│   ├── .htaccess          # Configuración Apache
│   ├── 404.html           # Página de error personalizada
│   ├── favicon.*          # Favicons dinámicos
│   ├── robots.txt         # Directivas para crawlers
│   ├── sitemap.xml        # Mapa del sitio
│   └── site.webmanifest   # PWA manifest
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes base (Radix UI)
│   │   ├── Header.tsx    # Navegación principal
│   │   ├── Footer.tsx    # Pie de página
│   │   ├── HeroSection.tsx # Sección principal
│   │   └── ...
│   ├── pages/            # Páginas de la aplicación
│   │   ├── HomePage.tsx  # Página principal
│   │   ├── NotFoundPage.tsx # Página 404
│   │   └── ...
│   ├── hooks/            # Custom hooks
│   │   └── useFavicon.ts # Hook para favicon dinámico
│   ├── utils/            # Utilidades
│   │   ├── seoConfig.ts  # Configuración SEO
│   │   └── sitemap.ts    # Generador de sitemap
│   └── assets/           # Imágenes y recursos
├── dist/                 # Build de producción
├── docs/                 # Documentación
└── scripts/              # Scripts de automatización
```

## 🚀 **Instalación y Desarrollo**

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/ferrsandoval/ainsa-website.git
cd ainsa-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### **Scripts Disponibles**
```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build            # Build de desarrollo
npm run preview          # Preview del build

# Producción
npm run build:prod       # Build optimizado
npm run build:siteground # Build para SiteGround
npm run deploy           # Deploy completo

# Utilidades
npm run check-favicon    # Verificar favicons
npm run verify-deployment # Verificar archivos de deploy
```

## 🌐 **Despliegue**

### **SiteGround (Recomendado)**
```bash
# Generar build de producción
npm run build:siteground

# Subir contenido de dist/ a public_html/
# Verificar que .htaccess esté en la raíz
```

### **Otros Hostings**
- **Netlify**: Arrastrar carpeta `dist/` a Netlify
- **Vercel**: Conectar repositorio GitHub
- **GitHub Pages**: Usar GitHub Actions

## 📊 **Páginas del Sitio**

### **Páginas Principales**
- **Home** (`/`) - Página principal con hero y overview
- **Productos** (`/#productos`) - Catálogo de productos
- **Nosotros** (`/#nosotros`) - Información de la empresa
- **Contacto** (`/#contacto`) - Formulario y datos de contacto

### **Páginas de Productos**
- **Acero Inoxidable** (`/#aceros-inoxidables`)
- **Aluminio** (`/#aluminio`)
- **Metales No Ferrosos** (`/#metales-no-ferrosos`)
- **Acero al Carbón** (`/#aceros-carbones-especiales`)
- **Placas Antidesgaste** (`/#placas-antidesgaste`)
- **Paneles ACP** (`/#paneles-acp`)
- **Consumibles y Abrasivos** (`/#consumibles-abrasivos`)
- **Soluciones IRVING®** (`/#soluciones-irving`)

### **Páginas Informativas**
- **Por qué Inoxidable** (`/#por-que-inoxidable`)
- **Industrias** (`/#industrias`)
- **404** (`/404`) - Página de error personalizada

## 🔧 **Configuración**

### **Variables de Entorno**
```bash
# config.production.js
export default {
  baseUrl: 'https://inoxidablesainsa.mx',
  environment: 'production',
  // ... más configuraciones
}
```

### **SEO Configuration**
```typescript
// src/utils/seoConfig.ts
export const seoConfigs = {
  'home': {
    title: 'AINSA - Distribución de Acero Inoxidable',
    description: '...',
    keywords: '...',
    // ...
  }
  // ... más páginas
}
```

## 📱 **Responsive Design**

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y enlaces optimizados para touch
- **Performance**: Imágenes optimizadas y lazy loading

## 🎨 **Sistema de Temas**

- **Tema Claro**: Colores azules y blancos
- **Tema Oscuro**: Colores oscuros con acentos azules
- **Favicon Dinámico**: Cambia automáticamente según el tema
- **Persistencia**: Guarda preferencia del usuario

## 🔍 **SEO Features**

- **Meta Tags Dinámicos**: Título, descripción y keywords por página
- **Open Graph**: Optimizado para Facebook y LinkedIn
- **Twitter Cards**: Optimizado para Twitter
- **JSON-LD**: Datos estructurados para Google
- **Sitemap XML**: Generado automáticamente
- **Robots.txt**: Configurado para crawlers

## 🛠️ **Mantenimiento**

### **Actualizar Contenido**
1. Editar archivos en `src/pages/` o `src/components/`
2. Actualizar SEO en `src/utils/seoConfig.ts`
3. Regenerar sitemap si es necesario
4. Hacer build y deploy

### **Agregar Nueva Página**
1. Crear componente en `src/pages/`
2. Agregar ruta en `src/App.tsx`
3. Configurar SEO en `seoConfig.ts`
4. Actualizar sitemap

## 📞 **Contacto**

- **Website**: [inoxidablesainsa.mx](https://inoxidablesainsa.mx)
- **Teléfono**: 662-438-5634
- **Email**: info@inoxidablesainsa.mx
- **Dirección**: Tlaxcala 328, Hermosillo, Sonora, México

## 👨‍💻 **Desarrollado por**

**EasyDevs** - [easydevs.us](https://easydevs.us)

---

## 📄 **Licencia**

Este proyecto es propiedad de AINSA Acero Inoxidable & Metales Industriales.

---

**¡Gracias por visitar el repositorio de AINSA!** 🏭✨