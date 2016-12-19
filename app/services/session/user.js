import { fetchApi } from '../api';
import {
  Linking,
  NativeModules,
} from 'react-native';
import qs from 'qs';
import { Buffer } from 'buffer';
const REDIRECT_URL = 'myredditapp://response';
const CLIENT_ID = 'XKt9bE1adviOCg';
const endPoints = {

};

const authorizate = async () => {
  try {
    let code = await _askPermission();
    
    let result = await _createTokenWithCode(code);
    return result.access_token;
  } catch(e) {
    console.log('e ', e);
    return null;
  }
};

function _createTokenWithCode(code) {
  const url = `https://www.reddit.com/api/v1/access_token` +
    `?grant_type=authorization_code` +
    `&code=${code}` +
    `&client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

  const authorizationHash = new Buffer(`${CLIENT_ID}:`).toString('base64');
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authorizationHash}`
    },
  }).then(res => res.json());

}
function _askPermission() {
  return new Promise((resolve, reject) => {
    let listener = Linking.addEventListener('url', handleUrl);

    const state = (new Date()).valueOf().toString();

    function handleUrl(event) {
      console.log('handleUrl ', event);
      const result = qs.parse(event.url.split('?')[1]);

      if (result.state !== state) {
        reject(`state mismatch: result: ${result.state} request: ${state}`);
      }

      Linking.removeEventListener('url', handleUrl);
      resolve(result.code);
    }

    const url = 'https://www.reddit.com/api/v1/authorize' +
      `?client_id=${CLIENT_ID}` +
      `&response_type=code` +
      `&state=${state}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}` +
      `&duration=permanent` +
      `&scope=identity`;

    Linking.openURL(url);
  })
}

export default {
  authorizate,
}
