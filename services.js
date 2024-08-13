const vision = require('@google-cloud/vision');
const translate = require('@google-cloud/translate').v2;

const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

const translateClient = new translate.Translate({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

module.exports = { client, translateClient };
