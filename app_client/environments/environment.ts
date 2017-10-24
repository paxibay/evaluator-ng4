// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCg6649Je-FOJM5bRTJeDN_lsmpiiBh868",
    authDomain: "paxi-essential.firebaseapp.com",
    databaseURL: "https://paxi-essential.firebaseio.com",
    projectId: "paxi-essential",
    storageBucket: "paxi-essential.appspot.com",
    messagingSenderId: "1075256159358"
  }
};
