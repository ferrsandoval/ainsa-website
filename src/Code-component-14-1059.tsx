# 📈 Guía de SEO - AINSA Website

## 🎯 Implementación Actual

### ✅ Características SEO Implementadas:

1. **Meta Tags Dinámicos**
   - Títulos únicos por página (55-60 caracteres)
   - Descripciones meta optimizadas (150-160 caracteres)
   - Keywords relevantes por página
   - Meta tags Open Graph para redes sociales
   - Twitter Cards para mejor sharing

2. **Datos Estructurados (JSON-LD)**
   - Schema.org Organization
   - Breadcrumbs automáticos
   - Información de contacto
   - Datos específicos por página

3. **Optimización Técnica**
   - Meta viewport para responsividad
   - Theme color para Android
   - Apple mobile web app tags
   - Canonical URLs para evitar contenido duplicado

4. **Sitemap Virtual**
   - Estructura completa del sitio definida
   - Prioridades y frecuencias de actualización
   - Generador de sitemap.xml

## 🔧 Archivos SEO Principales

```
/components/SEOHead.tsx      # Componente principal de SEO
/utils/seoConfig.ts          # Configuraciones SEO por página
/utils/sitemap.ts            # Generador de sitemap y robots.txt
```

## 📝 Cómo Actualizar el SEO

### Para una nueva página:

1. **Agregar configuración en `/utils/seoConfig.ts`:**
```typescript
'nueva-pagina': {
  title: 'Título SEO | AINSA',
  description: 'Descripción optimizada para motores de búsqueda',
  keywords: 'palabras, clave, relevantes',
  canonical: `${baseUrl}/nueva-pagina`,
  jsonLd: { /* datos estructurados */ }
}
```

2. **Agregar URL al sitemap en `/utils/sitemap.ts`:**
```typescript
{
  loc: `${baseUrl}/nueva-pagina`,
  changefreq: 'monthly',
  priority: 0.8
}
```

### Para actualizar meta tags existentes:

Editar el objeto correspondiente en `/utils/seoConfig.ts`

## 🎯 Mejores Prácticas Implementadas

### Títulos SEO:
- ✅ Estructura: "Tema Principal | Categoría - AINSA"
- ✅ 55-60 caracteres máximo
- ✅ Keywords principales al inicio
- ✅ Marca al final

### Descripciones Meta:
- ✅ 150-160 caracteres
- ✅ Call-to-action incluido
- ✅ Keywords naturalmente integradas
- ✅ Valor propuesto claro

### Keywords:
- ✅ 5-10 keywords por página
- ✅ Mix de términos generales y específicos
- ✅ Variaciones de long-tail
- ✅ Términos locales incluidos

## 📊 Datos Estructurados Implementados

### Schema.org Types Utilizados:
- `Organization` - Información de la empresa
- `ContactPoint` - Datos de contacto
- `PostalAddress` - Dirección física
- `BreadcrumbList` - Navegación
- `ItemList` - Catálogo de productos
- `Service` - Servicios por industria
- `ContactPage` - Página de contacto

## 🌐 Configuración por Ambiente

### Variables a actualizar en producción:

1. **En `/utils/seoConfig.ts`:**
   ```typescript
   const baseUrl = 'https://www.ainsa.com.mx'; // URL real
   ```

2. **En Organization JSON-LD:**
   - Agregar año de fundación real
   - Actualizar número de empleados
   - Verificar dirección física
   - Agregar redes sociales reales

3. **Imágenes Open Graph:**
   - Crear imágenes específicas (1200x630px)
   - Subir a CDN optimizado
   - Actualizar URLs en configuración

## 🔍 Monitoreo SEO Recomendado

### Herramientas a utilizar:
1. **Google Search Console**
   - Monitoreo de indexación
   - Errores de rastreo
   - Rendimiento de búsqueda

2. **Google Analytics 4**
   - Tráfico orgánico
   - Páginas más visitadas
   - Conversiones

3. **Google PageSpeed Insights**
   - Core Web Vitals
   - Optimización mobile
   - Sugerencias de rendimiento

### KPIs a monitorear:
- Posiciones promedio por keyword
- CTR orgánico
- Páginas indexadas
- Tiempo de carga
- Tasa de rebote
- Conversiones orgánicas

## 🚀 Próximas Mejoras Sugeridas

### Implementación a Futuro:
1. **Rich Snippets específicos:**
   - FAQ Schema para preguntas frecuentes
   - Product Schema para productos específicos
   - Review Schema para testimonios

2. **Optimización Avanzada:**
   - Implementar router real (React Router)
   - URLs amigables permanentes
   - Lazy loading de imágenes
   - Compresión GZIP

3. **Contenido SEO:**
   - Blog corporativo
   - Guías técnicas
   - Casos de éxito
   - Certificaciones y calidad

4. **SEO Local:**
   - Google My Business
   - LocalBusiness Schema
   - Reseñas estructuradas
   - Directorios industriales

## 📞 Contacto Técnico

Para dudas sobre la implementación SEO:
- Revisar la documentación de Schema.org
- Validar datos estructurados en Google Rich Results Test
- Probar meta tags en Facebook Sharing Debugger
- Verificar sitemap en Google Search Console

---

> **Nota importante:** Recordar actualizar las URLs base y datos de contacto reales antes del deployment en producción.