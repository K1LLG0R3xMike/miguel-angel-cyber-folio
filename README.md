# Portafolio — Miguel Ángel Rodríguez Correa

Sitio personal de portafolio: estudiante de Ingeniería de Sistemas enfocado en
ciberseguridad ofensiva (pentesting). Muestra habilidades, certificaciones
(eJPT) y proyectos.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router

## Desarrollo local

Requisitos: Node.js 18+ y npm.

```sh
npm install
npm run dev      # servidor de desarrollo en http://localhost:8080
```

## Scripts

| Comando            | Descripción                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Servidor de desarrollo con HMR       |
| `npm run build`    | Build de producción en `dist/`       |
| `npm run typecheck`| Comprobación de tipos con TypeScript  |
| `npm run lint`     | ESLint                               |
| `npm run preview`  | Sirve el build de producción         |

## Estructura

```
src/
  components/       Secciones de la página (Hero, About, Skills, ...)
  components/ui/    Componentes shadcn/ui
  pages/           Index y NotFound
public/            Imágenes, CV, robots.txt, sitemap.xml
```

## Despliegue

El proyecto se edita y despliega desde [Lovable](https://lovable.dev). Los
cambios en `main` se sincronizan automáticamente.

> Antes de publicar en un dominio propio, actualiza las URLs absolutas en
> `index.html` (canonical, Open Graph), `public/robots.txt` y
> `public/sitemap.xml`.
