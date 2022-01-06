 /* importando el modelo instalado, cuando veamos las {} significa
 que se exportando mas de una función */
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// compilar el codigo de Sass
function compilarCss(done) {
 /*
 1. acceder a la ruta del archivo sass
 2. necesitamos compilar ese archivo sass
 3. guardamos el archivo .css en una carpeta
 */
 // src es la función que me nos ayudar a indentificar la carpeta que contiene el archivo sass
 // dest es la funcion que nos va guardar el archivo compilado
 src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(dest('build/css'));

 done();
}

function watchChange() {
  // watch esta atento a lo que pase en el archivo style.scss
  // y si hay cambios vuelve a llamar a la funcion css
  watch('src/scss/styles.scss', compilarCss)
}
exports.compilarCss = compilarCss;
exports.watchChange = watchChange;