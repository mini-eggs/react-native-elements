import ZocialIcon from 'react-native-vector-icons/dist/Zocial';
import OcticonIcon from 'react-native-vector-icons/dist/Octicons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import FoundationIcon from 'react-native-vector-icons/dist/Foundation';
import EvilIcon from 'react-native-vector-icons/dist/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/dist/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'font-awesome':
      return FAIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'feather':
      return FeatherIcon;
    default:
      if (customIcons.hasOwnProperty(type)) {
        return customIcons[type];
      }
      return MaterialIcon;
  }
};
