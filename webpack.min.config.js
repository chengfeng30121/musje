const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'musje.min.js',
    library: {
      name: 'musje',
      type: 'umd'
    },
    globalObject: 'this'
  },
  externals: [
    'MIDI',
    {
      snapsvg: {
        root: 'Snap',
        commonjs2: 'snapsvg',
        commonjs: 'snapsvg',
        amd: 'snapsvg'
      }
    }
  ],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        include: [resolve('src')],
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions']
            }
          }]]
        }
      },
      { 
        test: /\.jison$/, 
        loader: './src/parser/jison-loader' 
      }
    ]
  },
  plugins: [],
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: []
  }
};