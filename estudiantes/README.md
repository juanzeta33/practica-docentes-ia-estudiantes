# Práctica de validación · estudiantes

Antes de empezar, revisa [REQUISITOS.md](REQUISITOS.md): herramientas, versiones, carpeta de trabajo y comandos.

Material de Prof. Juan Zamora. La actividad y sus reglas están en CONSIGNA.md. Sigue su orden: conserva tu predicción antes de ejecutar los casos o pedir ayuda.

## Ejecutar

Node compatible con Vite 8.3.5: 20.19+ o 22.12+. La producción se comprobó con Node 23.6.1.

```bash
npm ci
npm run dev
```

Abre http://127.0.0.1:5180. Los datos permanecen en memoria y desaparecen al recargar.

```bash
npm test
npm run build
```

La versión inicial tiene un fallo intencional. En ella pasan dos de las tres pruebas públicas y una falla; npm test termina con código 1. El build sí debe completarse. Tu objetivo es investigar el comportamiento, corregirlo y justificar tu cambio, no modificar las expectativas para ocultar el fallo.

La app y los datos son de ejemplo. No hay servidor, cuentas ni almacenamiento persistente. No necesitas una API key ni una suscripción de IA para ejecutar el material.
