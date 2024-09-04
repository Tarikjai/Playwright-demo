import {test,expect} from '@playwright/test'


test('dialog Box @smoke', async ({page}) =>{
     page.goto('https://practice-automation.com/popups/')
    
     
     // intercepter le popup
     page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Hi there, pal!');
        dialog.accept();
     })
     await page.waitForTimeout(1000)
     await page.getByRole('button' , {name:'Alert Popup'}).first().click()
})