import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';

// const { MM_PASSWORD, MM_SEED } = require('./secrets.json');

const url = 'https://marketplace.crabada.com/crabada';

async function main() {
    const browser = await dappeteer.launch(puppeteer, {
        metamaskVersion: 'v10.15.0',
        defaultViewport: { width: 1920, height: 1080 },
        headless: false, // limitation of puppeteer, chrome can't be used in headless mode
      });

    console.log('Loading metamask...');
    const metamask = await dappeteer.setupMetamask(browser, {
        seed: "bubble young armed shed unusual acid pilot chase caught crop defense only",
        password: "12345678",
        showTestNets: true,
        hideSeed: true,
    });

    await metamask.addNetwork({
        networkName: 'Avax',
        rpc: 'https://api.avax.network/ext/bc/C/rpc',
        chainId: 43114,
        symbol: 'AVAX',
        explorer: 'https://snowtrace.io/',
    });

    // switch to avax network
    await metamask.switchNetwork('Avax');

    // Open crabada marketplace
    const page = await browser.newPage();
  }
  
  main();