const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './index.html',
   output: {
      filename: 'bundle.html',
      path: path.resolve(__dirname, 'compiled')
   },
   module: {
      rules: [{
         test:/\.css$/,
         use: [
            miniCss.loader,
            'css-loader'
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};