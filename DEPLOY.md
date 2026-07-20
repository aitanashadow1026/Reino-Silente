# 🚀 Instrucciones para publicar el Reino Silente en GitHub Pages

Cuando vuelvas al otro PC, sigue estos pasos:

## 1. Crear un repo nuevo en GitHub

Ve a https://github.com/new y crea un repo llamado **`reino-silente`** (público).

## 2. Subir los archivos

Desde el otro PC (el que tiene el token de GitHub):

```bash
# Copia la carpeta desde el VPS (o descárgala)
# Luego:
cd reino-silente-web
git init
git add .
git commit -m "Primera publicación — Capítulo I, Escena 1"
git branch -M main
git remote add origin https://github.com/tu-usuario/reino-silente.git
git push -u origin main
```

## 3. Activar GitHub Pages

- Ve a Settings → Pages de tu repo
- En "Source", selecciona: **Deploy from a branch**
- Rama: **main**, carpeta: **/ (root)**
- Guardar

## 4. ¡Ya está!

En 1-2 minutos tu sitio estará en:
```
https://tu-usuario.github.io/reino-silente/
```

Opcional: si quieres un dominio personalizado, añádelo en Settings → Pages.

---

## 📂 Estructura del sitio

```
reino-silente-web/
├── index.html              ← Portada e índice
├── css/reino.css           ← Tema oscuro medieval
├── js/reino.js             ← Navegación con teclado
├── capitulos/
│   └── cap1-escena1.html   ← Escena 1 ✓
├── lore/
│   ├── mundo.html          ← Cristales, Valdros, Runas
│   └── personajes.html     ← Lira, Saun, familia
```

## ➕ Cómo añadir más escenas

1. Crear `capitulos/cap2-escena1.html` (o la que toque)
2. Usar la misma plantilla que `cap1-escena1.html`
3. Actualizar los enlaces "Anterior / Siguiente" en el nav
4. Añadir la entrada en `index.html` en la lista de capítulos
5. Hacer git add, commit, push

## ⌨️ Truco

En las páginas de escena funcionan las flechas del teclado:
- ← Flecha izquierda: escena anterior
- → Flecha derecha: escena siguiente
