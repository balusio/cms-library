import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import jsx from 'rollup-plugin-jsx'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    serve({
      contentBase: 'dist',
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
    })
  ],
};
