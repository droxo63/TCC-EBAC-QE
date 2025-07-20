import { generalConf } from './general.conf.js';

export let localConf = {
  runner: 'local',
  port: 4723,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': `${process.cwd()}/app/ebacshop.apk`,
    'appium:appWaitActivity': '.MainActivity',
    'appium:disableIdAutoCompletion': true
  }],
  ...generalConf
};
