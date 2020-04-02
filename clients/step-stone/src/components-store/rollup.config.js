import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json';
import multiInput from 'rollup-plugin-multi-input';
import pkg from './package.json'

export default [{
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  inlineDynamicImports: true,
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: '../../../node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs({
      include: '../../../node_modules/**',
      namedExports: {
        '../../../node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        '../../../node_modules/react-dom/index.js': ['render'],
        '../../../node_modules/react-is/index.js': ['isValidElementType']
      }
    }),
    json()
  ]
},
{
  input: ['components/**/*.js'],
  output: [
    {
      format: 'es',
      dir: 'dist/'
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs(),
    multiInput()
  ]
}]
