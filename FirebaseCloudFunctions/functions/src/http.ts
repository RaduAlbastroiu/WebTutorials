import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import { response } from 'firebase-functions/node_modules/@types/express';
admin.initializeApp();

export const basicHTTP = functions.https.onRequest((req, res) => {
  response.send('Hello from Firebase!');
});
