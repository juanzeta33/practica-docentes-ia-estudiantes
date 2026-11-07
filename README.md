# Práctica de programación con IA · material para estudiantes

Material de **Prof. Juan Zamora** para el [Video Tutorial: prepara una práctica de programación con IA](https://www.youtube.com/watch?v=ia6dxjk0BeU).

Una aplicación React pequeña para seguir el recorrido de un dato, investigar un fallo intencional y justificar una corrección. El repositorio contiene únicamente el proyecto inicial del estudiante, sus tres pruebas públicas, la consigna, el registro de ayuda y los requisitos. La solución y la guía docente se conservan aparte.

## Antes de empezar

Consulta [los requisitos](estudiantes/REQUISITOS.md). Necesitas JavaScript y React básicos, editor, terminal, navegador, Node.js compatible con Vite 8.3.5 y npm. Para una instalación nueva, usa una versión LTS mantenida compatible. No hace falta una cuenta ni una API key de IA para ejecutar el proyecto. Remotion, Manim y Docker no se requieren para esta práctica.

Comprueba las versiones:

```bash
node --version
npm --version
```

## Descargar y abrir

Puedes descargar el ZIP desde el botón **Code → Download ZIP** de GitHub, descomprimirlo y abrir la carpeta en el editor. También puedes clonar:

```bash
git clone https://github.com/juanzeta33/practica-docentes-ia-estudiantes.git
cd practica-docentes-ia-estudiantes/estudiantes
npm ci
```

Si descargaste el ZIP, abre una terminal dentro de `estudiantes`, donde están `package.json` y `package-lock.json`. En macOS/Linux, `pwd` muestra la carpeta actual; en PowerShell, `Get-Location`.

Lee [CONSIGNA.md](estudiantes/CONSIGNA.md) y conserva tu predicción antes de ejecutar los casos o pedir ayuda. Después levanta la app:

```bash
npm run dev
```

Abre **http://127.0.0.1:5180/**. Deja esa terminal abierta y usa otra dentro de la misma carpeta para las pruebas:

```bash
npm test
npm run build
```

Detén el servidor con **Ctrl+C**.

## Resultado previsto al empezar

- Dos de las tres pruebas públicas pasan y una falla intencionalmente. `npm test` termina con código 1.
- La compilación con `npm run build` debe completarse.
- El objetivo es explicar el defecto y justificar una corrección conservando el contrato publicado; no cambiar las expectativas para ocultar el fallo.

## Qué entregar

Sigue la [consigna](estudiantes/CONSIGNA.md). Incluye predicción, recorrido del dato, evidencia del fallo, cambio justificado y comprobación de un caso pertinente. Registra la ayuda relevante en [REGISTRO-AYUDA.md](estudiantes/REGISTRO-AYUDA.md). Las reglas de uso de IA y evaluación se adaptan al grupo y a la política institucional.

## Alcance

Datos ficticios y estado en memoria. Recargar la página vacía la lista. No hay servidor de datos, usuarios ni almacenamiento permanente. El fallo se introdujo con intención didáctica. Las escenas de prompt del video son plantillas. Las pruebas que pasan no demuestran por sí solas toda la comprensión ni ausencia de otros fallos.

