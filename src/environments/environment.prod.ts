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
  domain: '.fitnesstrainer.tube',
  siteKey:'0x4AAAAAAAUwDv2sJ3UlZCEf',
  secretKey:'0x4AAAAAAAUwDilFmDq516h-owR9Q0Ew5hk',
  // stripe_key: 'pk_test_51MwOHTSJJZB3pTDyqpZk5NJDaWkbuGiruTp79We9CcR2oODObX93TleYFTJj2qLowRuRL1DRTSIl8Vb1YiFyW7e900BYWlZKSM',
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
  qrLink: `${webUrl}settings/edit-profile/`,
};
