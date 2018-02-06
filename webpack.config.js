const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'react-native': 'react-native',
    'react-native-vector-icons/dist/MaterialIcons':
      'react-native-vector-icons/dist/MaterialIcons',
    'react-native-vector-icons/dist/FontAwesome':
      'react-native-vector-icons/dist/FontAwesome',
    'react-native-vector-icons/dist/Zocial':
      'react-native-vector-icons/dist/Zocial',
    'react-native-vector-icons/dist/Octicons':
      'react-native-vector-icons/dist/Octicons',
    'react-native-vector-icons/dist/MaterialCommunityIcons':
      'react-native-vector-icons/dist/MaterialCommunityIcons',
    'react-native-vector-icons/dist/Foundation':
      'react-native-vector-icons/dist/Foundation',
    'react-native-vector-icons/dist/SimpleLineIcons':
      'react-native-vector-icons/dist/SimpleLineIcons',
    'react-native-vector-icons/dist/EvilIcons':
      'react-native-vector-icons/dist/EvilIcons',
    'react-native-vector-icons/dist/Entypo':
      'react-native-vector-icons/dist/Entypo',
    'react-native-vector-icons/dist/Ionicons':
      'react-native-vector-icons/dist/Ionicons',
    'react-native-vector-icons/dist/Feather':
      'react-native-vector-icons/dist/Feather',
  },
};
