const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: process.env.GOOGLE_CLOUD_STORAGE_KEYFILE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

module.exports = storage;
