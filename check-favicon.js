#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando archivos de favicon...\n');

// Lista de archivos de favicon requeridos
const requiredFiles = [
  // Favicon básico
  'public/favicon.ico',
  'public/favicon.png',
  'public/favicon-dark.png',
  
  // Archivos de configuración
  'public/site.webmanifest',
  'public/browserconfig.xml'
];

let missingFiles = [];
let existingFiles = [];

// Verificar cada archivo
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    existingFiles.push(file);
    console.log(`✅ ${file}`);
  } else {
    missingFiles.push(file);
    console.log(`❌ ${file} - FALTANTE`);
  }
});

// Resumen
console.log(`\n📊 Resumen:`);
console.log(`   ✅ Archivos presentes: ${existingFiles.length}`);
console.log(`   ❌ Archivos faltantes: ${missingFiles.length}`);
console.log(`   📁 Total requeridos: ${requiredFiles.length}`);

if (missingFiles.length > 0) {
  console.log(`\n⚠️  Archivos faltantes:`);
  missingFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
  
  console.log(`\n📋 Próximos pasos:`);
  console.log(`   1. Revisar FAVICON-INSTRUCTIONS.md`);
  console.log(`   2. Generar archivos faltantes con RealFaviconGenerator`);
  console.log(`   3. Colocar archivos en la carpeta public/`);
  console.log(`   4. Ejecutar este script nuevamente para verificar`);
} else {
  console.log(`\n🎉 ¡Todos los archivos de favicon están presentes!`);
  console.log(`   El favicon está completamente implementado.`);
}

// Verificar index.html
console.log(`\n🔍 Verificando index.html...`);
const indexPath = 'index.html';
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  const requiredTags = [
    'favicon.ico',
    'favicon.png',
    'apple-touch-icon',
    'site.webmanifest',
    'browserconfig.xml'
  ];
  
  let missingTags = [];
  requiredTags.forEach(tag => {
    if (!indexContent.includes(tag)) {
      missingTags.push(tag);
    }
  });
  
  if (missingTags.length === 0) {
    console.log(`✅ index.html contiene todas las referencias de favicon`);
  } else {
    console.log(`❌ index.html faltan referencias:`);
    missingTags.forEach(tag => {
      console.log(`   - ${tag}`);
    });
  }
} else {
  console.log(`❌ index.html no encontrado`);
}

console.log(`\n📖 Para más información, revisa FAVICON-INSTRUCTIONS.md`);
