const url = 'https://api.fitnesstrainer.tube';
const webUrl = 'https://fitnesstrainer.tube/';
const tubeUrl = 'https://video.fitnesstrainer.tube/'

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: true,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.fitnesstrainer.tube'
};
