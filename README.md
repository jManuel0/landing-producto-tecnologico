# Landing Producto Tecnologico

Este repositorio aloja la landing page de StudyTrack. Para organizar el trabajo en equipo se crearon ramas específicas:

- **feature/estructura-html**: contiene los cambios relacionados con la estructura HTML de la página (secciones, contenido, navegación). Es aquí donde se puede modificar el marcado sin alterar estilos.
- **feature/diseno-css**: aloja las hojas de estilo y cualquier trabajo de diseño, responsividad y accesibilidad. Cambios visuales y adaptaciones para móvil deben hacerse en esta rama.

Ambas ramas están sincronizadas y contienen el CSS actual y los recursos (imagen del dashboard). A partir de estas ramas los compañeros pueden crear sus propias ramas para tareas nuevas (ej. `feature/js-interactividad`, `feature/form-backend`, etc.).

## Flujo sugerido

1. Seleccionar la rama base según la naturaleza de la tarea.
2. Crear una rama nueva a partir de ella (`git checkout -b feature/nueva-funcionalidad`).
3. Trabajar y subir (`git push -u origin feature/nueva-funcionalidad`).
4. Abrir pull request hacia `develop`/`main` cuando esté listo.

### Ejemplo de trabajo en equipo 🚀
Cuando un desarrollador termina su parte de HTML en `feature/estructura-html`, el procedimiento es:

```bash
# asegurarse de que la rama develop está actualizada
git checkout develop
git pull origin develop

# fusionar cambios de estructura
git merge feature/estructura-html

git push origin develop
```

Esto deja la rama `develop` con la última estructura y lista para que otro compañero tome la tarea siguiente (por ejemplo, estilos o JavaScript).  El mismo flujo aplica si un desarrollador termina algo en `feature/diseno-css` o cualquier otra rama; simplemente se mergea en `develop` con el mismo conjunto de comandos.

## Notas

- El archivo `assets/image/dashboard.webp` se incluye en la rama de diseño y se usa en el hero.
- El CSS usa variables y soporte de modo oscuro mediante `prefers-color-scheme`.
- Un script pequeño (`js/app.js`) gestiona el scroll suave al formulario
