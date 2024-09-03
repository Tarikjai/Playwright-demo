import {expect} from '@playwright/test'
import {test} from '../test-options'


test('Drag and drop', async ({page ,herokuappURL}) =>{
    await page.goto(herokuappURL)
    await page.locator('#column-a').dragTo(page.locator('#column-b'))
    await expect(page.locator('#column-b')).toHaveText('A')
})