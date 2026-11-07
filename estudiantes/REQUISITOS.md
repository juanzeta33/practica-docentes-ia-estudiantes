# Requisitos y herramientas previas

## Para seguir el tutorial y ejecutar la práctica

- Funciones, arreglos, condicionales, `trim()` y pruebas básicas de JavaScript.
- Componentes, formularios y estado de React. El proyecto ya contiene React; no se instala globalmente.
- Editor de texto/código, terminal y navegador moderno.
- Node.js compatible con Vite 8.3.5: `^20.19.0 || >=22.12.0`. Para una instalación nueva, elige una versión LTS mantenida compatible desde https://nodejs.org/ . La grabación se verificó en Node 23.6.1; no se recomienda instalar esa versión solo por coincidir con el video.
- npm (incluido normalmente con Node). Comprueba `node --version` y `npm --version`.
- Internet para descargar dependencias si no están en caché. Se necesitan permisos para escribir dentro de la carpeta del proyecto.

## Carpeta y comandos

Descomprime el paquete en una carpeta propia. En la terminal, usa `pwd` (macOS/Linux) o `Get-Location` (PowerShell) para comprobar tu ubicación. Entra en `estudiantes` o `docente` según el paquete; allí deben estar `package.json` y `package-lock.json`. Si el sistema ofrece abrir la carpeta en la terminal, también puedes usar esa opción.

Revisa `package.json` antes de instalar. `npm ci` instala React 19.2.0, React DOM 19.2.0 y Vite 8.3.5 según el lockfile. Las pruebas usan `node:test`, incluido en Node. No necesitas instalar React, Vite ni un ejecutor de pruebas globalmente.

`npm run dev` mantiene un servidor local en primer plano: deja abierta esa terminal y usa otra para `npm test`. Detén el servidor con Ctrl+C. Puertos: estudiantes 5180 y docente 5181; si están ocupados, el comando lo indica y no cambia de puerto silenciosamente.

## IA y herramientas de producción

Para preparar nuevas variantes con un agente, configura tu agente de código y su acceso al proyecto siguiendo su documentación. La ejecución del material entregado no necesita cuenta de IA, suscripción ni API key. No incluyas credenciales en el paquete que compartes.

Remotion, Manim, Python y FFmpeg se usaron para producir el video: no son requisitos para docentes ni estudiantes que ejecuten esta práctica. Docker tampoco es necesario en este ejemplo local.

## Referencias

- Vite, guía oficial y compatibilidad Node: https://vite.dev/guide/
- Node.js, descargas: https://nodejs.org/
- npm ci: https://docs.npmjs.com/cli/commands/npm-ci
- Node Test runner: https://nodejs.org/api/test.html
- React: https://react.dev/learn
