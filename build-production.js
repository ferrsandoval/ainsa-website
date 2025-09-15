#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build de producción para SiteGround...\n');

try {
  // 1. Limpiar build anterior
  console.log('📁 Limpiando build anterior...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // 2. Instalar dependencias
  console.log('📦 Instalando dependencias...');
  execSync('npm install', { stdio: 'inherit' });

  // 3. Build de producción
  console.log('🔨 Creando build de producción...');
  execSync('npm run build:prod', { stdio: 'inherit' });

  // 4. Verificar archivos críticos
  console.log('✅ Verificando archivos críticos...');
  const criticalFiles = [
    'dist/index.html',
    'dist/.htaccess',
    'dist/robots.txt',
    'dist/sitemap.xml'
  ];

  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✓ ${file}`);
    } else {
      console.log(`   ✗ ${file} - FALTANTE`);
    }
  });

  // 5. Mostrar información del build
  console.log('\n📊 Información del build:');
  const distStats = fs.statSync('dist');
  console.log(`   Tamaño total: ${(getDirSize('dist') / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Archivos generados: ${countFiles('dist')}`);

  // 6. Instrucciones finales
  console.log('\n🎉 Build completado exitosamente!');
  console.log('\n📋 Próximos pasos:');
  console.log('   1. Acceder al File Manager de SiteGround');
  console.log('   2. Navegar a public_html/ (o carpeta del dominio)');
  console.log('   3. Subir TODO el contenido de la carpeta dist/');
  console.log('   4. Verificar que .htaccess esté en la raíz');
  console.log('   5. Probar el sitio en https://ainsa.com.mx');
  
  console.log('\n📁 Archivos listos para subir:');
  console.log('   dist/ → public_html/');
  
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}

function getDirSize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stats.size;
    }
  });
  
  return size;
}

function countFiles(dirPath) {
  let count = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      count += countFiles(filePath);
    } else {
      count++;
    }
  });
  
  return count;
}

