import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'

const folder = new RegExp(`^${path.resolve()}\/src/*`);

export default {
  input: `${path.resolve()}/src/index.js`,
  output: {
    file: `${path.resolve()}/dist/bundle.js`,
    format: 'umd',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },

  external: [
    'react', 
    'react-dom', 
  ],
  plugins: [
    alias({
      entries: [
        { find: 'utils', replacement: '../src/utils' },
        { find: '@lib', replacement: '../src/lib' }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      resolveOnly: [ 'react-jss', folder ],
    }),
    commonjs({
      include: 'node_modules/**',

    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    terser(),
  ],

};
