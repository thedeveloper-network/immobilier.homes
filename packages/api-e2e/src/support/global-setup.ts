import { exec } from "child_process";

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');
  globalThis.abort = new AbortController();
  globalThis.proc = exec('node dist/packages/api/main.js', { signal: globalThis.abort.signal });

  console.log('proc', globalThis.proc );


  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
