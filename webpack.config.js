const path = require('path');
const GoogleFontsPlugin = require('google-fonts-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Fira Code',
          variants: [
            '500',
            '600',
          ],
        },
      ],
    }),
  ],
};
