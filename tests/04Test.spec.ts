import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto(process.env.URL)
    await page.getByText('Button Triggering AJAX Request').click()
})



test("Auto waiting", async ({page}) =>{
    const successButton = page.locator('.bg-success')
    //await successButton.click()
    //const text = await successButton.textContent()
    //expect(text).toEqual('Data loaded with AJAX get request.') 

    await successButton.waitFor({state:'attached'})

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.') 

})
 

test("Alternative  waiting", async ({page}) =>{
    const successButton = page.locator('.bg-success')
    
    //__Wait for information
    //await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')

    //wait for element

    await page.waitForSelector('.bg-success')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.') 

})