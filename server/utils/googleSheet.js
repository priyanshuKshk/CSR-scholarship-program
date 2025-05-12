const { google } = require('googleapis');
const keys = require('../credentials.json');
require('dotenv').config();

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
console.log('Sheet ID:', SHEET_ID); // Add this line temporarily

async function appendToSheet(dataArray) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Sheet1!A1',
    valueInputOption: 'USER_ENTERED',
    resource: {
        values: [dataArray],
    },
});
}

module.exports = appendToSheet;
