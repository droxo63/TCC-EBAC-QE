import { generalConf } from './general.conf.js';

export let localConf = {
  runner: 'local',
  port: 4723,

capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:platformVersion': '14.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': `${process.cwd()}/app/loja-ebac.apk`,
  'appium:appPackage': 'com.woocommerce.android',
  'appium:appActivity': 'com.woocommerce.android.ui.main.MainActivity',
  'appium:disableIdAutoCompletion': true
}],


  // se tiver hooks, timeouts ou reporter, coloque aqui...

  ...generalConf
};
