import fs from 'fs';
import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

import { preprocessor } from '@badeball/cypress-cucumber-preprocessor/browserify';

export default defineConfig({

  animationDistanceThreshold: 5,
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  execTimeout: 30000,
  fileServerFolder: 'cypress',
  fixturesFolder: 'cypress/fixtures',
  modifyObstructiveCode: true,
  numTestsKeptInMemory: 10,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  taskTimeout: 30000,
  trashAssetsBeforeRuns: true,
  waitForAnimations: true,
  watchForFileChanges: true,
  experimentalMemoryManagement: false,
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'dist/reports/assets/screenshots',
  videosFolder: 'dist/reports/assets/videos',
  viewportWidth: 1920,
  viewportHeight: 1080,
  blockHosts: [
    '*.wt-safetag.com',
    '*.hotjar.com',
    '*.statscore.com',
    '*.wicket-keeper.com'
  ],
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(cypressOn, config) {
      await addCucumberPreprocessorPlugin(cypressOn, config);
      cypressOn('file:preprocessor', preprocessor(config, {typescript: require.resolve('typescript'),}));
      // @ts-ignore
      cypressOn('before:browser:launch', (browser, launchOptions) => {
        launchOptions.args.push('--window-size=2880,1620');
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--force-device-scale-factor=1');
          launchOptions.args.push('--force-color-profile=srgb');
          launchOptions.args.push('--font-render-hinting=none');
          launchOptions.args.push('--disable-low-res-tiling');
          launchOptions.args.push('--disable-smooth-scrolling');
          // launchOptions.args.push('--hide-scrollbars');
          // launchOptions.args.push('--disable-font-subpixel-positioning');
        }
        return launchOptions
      });

      cypressOn('task', {
        getDownloadedFileName() {
          let files;
          let start = Date.now();
          let elapsed = Date.now();
          console.log('Trying to find a downloaded file.');
          do {
            files = fs.readdirSync('cypress/downloads');
            files = files.filter(function (str) { // ensure we only get the file, not the temp file
              return str.endsWith('.xlsx') || str.endsWith('.ris') || str.endsWith('.csv');
            });
            elapsed = Date.now() - start;
          } while (files.length < 1 && elapsed < 100000);

          if (files.length > 0) {
            // It's an array but will/should have only one element
            console.log(`Found the file: ${files[0]} after ${elapsed}ms`);
            return files[0];
          } else {
            console.log(`After waiting we got: ${files.toString()}.`)
            return "TIMEOUT";
          }
        }
      });
      return config;
    }
  },
});
