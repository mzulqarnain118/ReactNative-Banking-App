import {AppRegistry} from 'react-native';
import App from './App';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';
import './index.css';


const title = 'App';

AppRegistry.registerComponent(title, () => App);

AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root'),
});

applyPolyfills().then(() => {
    defineCustomElements(window);
});
