const path = require('path');

const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const typescript2 = require('rollup-plugin-typescript2');

const magicImporter = require('node-sass-magic-importer');
const aliasImporter = require('node-sass-alias-importer');

const LIB_DIR = './libs/mylib-core-styles';
// const LIB_OUTPUT_DIR = './dist/libs/mylib-core-styles';

const TS_CONFIG_PATH = path.join(LIB_DIR, 'tsconfig.json');

const ts_defaults = { compilerOptions: { declaration: true } };
const ts_override = { compilerOptions: { declaration: false } };

const scssPrefixVarPath = `${LIB_DIR}/scss/abstracts/__abstracts-dir.scss`;

module.exports = (args) => ({
  input: args.input,
  treeshake: true,
  external: [],
  plugins: [
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: false,
      prefix: `@import "${scssPrefixVarPath}";`,
      importer: [
        magicImporter({
          cwd: process.cwd(),
        }),
        aliasImporter({
          '@libs': './libs',
        })
      ],
      processor: (css) => postcss([autoprefixer, cssnano]).process(css, { from: undefined }),
    }),
    typescript2({
      tsconfig: TS_CONFIG_PATH,
      tsconfigDefaults: ts_defaults,
      tsconfigOverride: ts_override,
      check: false,
      cacheRoot: path.join(path.resolve(), 'node_modules/.tmp/.rts2_cache'),
      useTsconfigDeclarationDir: true,
    }),
    copy({
      targets: [
        { src: path.join(LIB_DIR, 'scss/*'), dest: path.join(args.output.dir, 'scss') },
        { src: path.join(LIB_DIR, 'fonts/*'), dest: path.join(args.output.dir, 'fonts') },
        { src: path.join(LIB_DIR, 'icons/*'), dest: path.join(args.output.dir, 'icons') }
      ]
    })
  ],
  onwarn(warning) {
    console.warn('onwarn:', warning);
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.warn('Rollup warning: ', warning.message);
  },
  output: {
    dir: args.output.dir,
    sourcemap: true,
    exports: 'named',
    format: 'es',
    preserveModules: true
  },
});
