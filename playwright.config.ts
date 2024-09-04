import { defineConfig, devices } from '@playwright/test';
import type { TesOptions } from './test-options';

 require('dotenv').config()

export default defineConfig<TesOptions>({
  timeout:40000,
  reporter: [
      ['json', {outputFile: 'test-results/reportingJson.json'}],
      ['junit', {outputFile: 'test-results/reportingJson.xml'}],
      ['allure-playwright']
          ] 
  ,
  use: {
    baseURL: 'https://practice-automation.com/',
    herokuappURL :'https://the-internet.herokuapp.com/drag_and_drop',

    trace: 'on-first-retry',
    video:{
      mode :'off',
      size : {width: 1920, height: 1080}
    },
  },

  projects: [
    {
      name: 'dev',
      use: { ...devices['Desktop Chrome'] ,
        baseURL: 'http://localhost:3000/'
      },
    },
    {
      name: 'chromium',
      timeout:30000,
      
    },
    {
      name: 'firefox',
      use : {
        browserName: 'firefox',
         video:{
          mode :'on',
          size : {width: 1920, height: 1080}
        },
     },
    }
    ,{
      name:'FromsFields',
      testMatch:'05Test.spec.ts',
        use:{
          viewport:{width: 1920, height: 1080
            
          }
        }
    },
    {
      name:'mobile',
      testmatch : 'mobileTest.spec.ts',
      use: {
        ...devices['iPhone 13 Pro Max']
      }
    }
  ],
});
