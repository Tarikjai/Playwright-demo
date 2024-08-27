import {test,expect} from '@playwright/test'


test('Drag and drop', async ({page}) =>{
      
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.locator('#column-a').dragTo(page.locator('#column-b'))

    await expect(page.locator('#column-b')).toHaveText('A')

   
})