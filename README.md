# Svelte

Svelte no utiliza webpack.
Svelte no utiliza virtual dom.

Aprendiendo a usar Svelte
pasoa para usar svelte + typescript desde 0

paso1:
npx degit sveltejs/template nombreDeLaApp.
cd directorioDeLaApp.
node scripts/setupTypeScript.js.

paso 1: abrir el cmd (comand o bash) en la carpeta donde se trabajara (proyecto).

paso 2: ejecutar npx degit sveltejs/template nombreDeLaApp (seveltejs/template es un repo en github del cual se instala localmente).

paso 3: nos pregunta de instalar una actualizacion de degit y le confirmamos si
paso 4: se observa ya la carpeta con los archivos necesarios para comenzar con la app svelte.

paso 5: entrar por consola o cmd a la carpeta de la app creada.

paso 6: opcional anterior al paso 1: ejecutar npm i o npm install ( que comenzara a instalar dependencias o paquetes necesarios).

paso 7: npm run dev (dentro del directorio de la app.)

paso 8: hacer click en la x de la terminal(cmd) esto solo minimiza la misma.

opcional (proyecto desde cero): node scripts/setupTypeScript.js.

Paso 9: npm install --save-dev @tsconfig/svelte typescript svelte-preprocess svelte-check (esta linea de comandos para comenzar a trabajar con typescrypt).

paso 10: npm install --save-dev @rollup/plugin-typescript (necesario).
paso 11: modificar el archivo tsconfig.json.
paso 12: npx svelte-check.
