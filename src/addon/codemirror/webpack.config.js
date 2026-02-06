'use strict';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: './src/addon/codemirror/musje-codemirror.js',
  output: {
    path: path.join(__dirname, '../../../lib/addon/codemirror'),
    filename: 'musje-codemirror.js',
    library: {
      name: 'musjeCodemirror',
      type: 'umd'
    },
    globalObject: 'this'
  },
  externals: [
    {
      codemirror: {
        root: 'CodeMirror',
        commonjs2: 'codemirror',
        commonjs: 'codemirror',
        amd: 'codemirror'
      }
    }
  ],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        include: [resolve('../../')],
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions']
            }
          }]]
        }
      }
    ]
  },
  mode: 'development'
};