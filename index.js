/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/native/App';
import {name as appName} from './src/native/app.json';

AppRegistry.registerComponent(appName, () => App);
