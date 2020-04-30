import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import copy from 'rollup-plugin-copy'
import path from 'path'
import react from 'react'
import reactDom from 'react-dom'
export default {
  input: `${path.resolve()}/src/index.js`,
  output: {
    file:  `${path.resolve()}/demo/bundle.js`,
    format: 'umd',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom)
      }
    }),
    serve({
      contentBase: 'demo',
      // Options used in setting up server
      host: 'localhost',
      port: 4200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }),  
    livereload(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    copy({
      targets: [
        { src: `${path.resolve()}/src/assets/index.html`, dest: `${path.resolve()}/demo/` },
        // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
        // { src: 'assets/images/**/*', dest: 'dist/public/images' }
      ]
    })
  ],
};
