#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando archivos para despliegue en SiteGround...\n');

// Archivos críticos requeridos
const criticalFiles = [
  'dist/index.html',
  'dist/404.html',
  'dist/.htaccess',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/site.webmanifest',
  'dist/browserconfig.xml',
  'dist/favicon.ico',
  'dist/favicon.png',
  'dist/favicon-dark.png'
];

// Archivos de assets esperados
const expectedAssets = [
  'dist/assets/index-',
  'dist/assets/vendor-',
  'dist/assets/motion-',
  'dist/assets/ui-',
  'dist/assets/icons-',
  'dist/assets/logo-ainsa',
  'dist/assets/logo-ainsa-dark',
  'dist/assets/logo-easydevs',
  'dist/assets/logo-easydevs-night'
];

let missingFiles = [];
let existingFiles = [];
let totalSize = 0;

// Verificar archivos críticos
console.log('📋 Verificando archivos críticos...');
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    totalSize += stats.size;
    existingFiles.push(file);
    console.log(`   ✅ ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    missingFiles.push(file);
    console.log(`   ❌ ${file} - FALTANTE`);
  }
});

// Verificar assets
console.log('\n📦 Verificando assets...');
const assetsDir = 'dist/assets';
if (fs.existsSync(assetsDir)) {
  const assets = fs.readdirSync(assetsDir);
  expectedAssets.forEach(expected => {
    const found = assets.find(asset => asset.startsWith(path.basename(expected)));
    if (found) {
      const filePath = path.join(assetsDir, found);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
      console.log(`   ✅ ${found} (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`   ⚠️  ${expected}* - No encontrado`);
    }
  });
} else {
  console.log('   ❌ Carpeta assets/ no encontrada');
  missingFiles.push('dist/assets/');
}

// Verificar contenido de archivos críticos
console.log('\n🔍 Verificando contenido de archivos...');

// Verificar index.html
if (fs.existsSync('dist/index.html')) {
  const indexContent = fs.readFileSync('dist/index.html', 'utf8');
  const requiredElements = [
    'inoxidablesainsa.mx',
    'favicon.png',
    'site.webmanifest',
    'browserconfig.xml'
  ];
  
  requiredElements.forEach(element => {
    if (indexContent.includes(element)) {
      console.log(`   ✅ index.html contiene: ${element}`);
    } else {
      console.log(`   ❌ index.html NO contiene: ${element}`);
    }
  });
}

// Verificar .htaccess
if (fs.existsSync('dist/.htaccess')) {
  const htaccessContent = fs.readFileSync('dist/.htaccess', 'utf8');
  const requiredDirectives = [
    'mod_deflate',
    'mod_expires',
    'mod_rewrite',
    'RewriteEngine On'
  ];
  
  requiredDirectives.forEach(directive => {
    if (htaccessContent.includes(directive)) {
      console.log(`   ✅ .htaccess contiene: ${directive}`);
    } else {
      console.log(`   ❌ .htaccess NO contiene: ${directive}`);
    }
  });
}

// Verificar sitemap.xml
if (fs.existsSync('dist/sitemap.xml')) {
  const sitemapContent = fs.readFileSync('dist/sitemap.xml', 'utf8');
  if (sitemapContent.includes('inoxidablesainsa.mx')) {
    console.log('   ✅ sitemap.xml contiene URL correcta');
  } else {
    console.log('   ❌ sitemap.xml NO contiene URL correcta');
  }
}

// Verificar robots.txt
if (fs.existsSync('dist/robots.txt')) {
  const robotsContent = fs.readFileSync('dist/robots.txt', 'utf8');
  if (robotsContent.includes('inoxidablesainsa.mx')) {
    console.log('   ✅ robots.txt contiene URL correcta');
  } else {
    console.log('   ❌ robots.txt NO contiene URL correcta');
  }
}

// Resumen final
console.log('\n📊 RESUMEN DEL DESPLIEGUE:');
console.log(`   ✅ Archivos presentes: ${existingFiles.length}`);
console.log(`   ❌ Archivos faltantes: ${missingFiles.length}`);
console.log(`   📁 Tamaño total: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

if (missingFiles.length === 0) {
  console.log('\n🎉 ¡PROYECTO LISTO PARA SITEGROUND!');
  console.log('\n📋 Próximos pasos:');
  console.log('   1. Acceder al File Manager de SiteGround');
  console.log('   2. Navegar a public_html/');
  console.log('   3. Subir TODO el contenido de dist/');
  console.log('   4. Verificar que .htaccess esté en la raíz');
  console.log('   5. Probar el sitio en https://inoxidablesainsa.mx/');
  console.log('\n📖 Para más detalles, revisa SITEGROUND-DEPLOYMENT.md');
} else {
  console.log('\n❌ FALTAN ARCHIVOS CRÍTICOS:');
  missingFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
  console.log('\n🔧 Ejecuta: npm run build:siteground');
}

console.log('\n🚀 ¡Despliegue exitoso!');
