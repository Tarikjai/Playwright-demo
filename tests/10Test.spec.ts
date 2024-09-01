import {test,expect} from '@playwright/test'
import { FormPage } from '../page-object/FormPage'
import {faker} from "@faker-js/faker"

test.beforeEach(async({page}) => {
    await page.goto('https://practice-automation.com/form-fields/')
    
})

test('Value ', async ({page})=> {
    const input = new FormPage(page)
    const randomName = faker.person.fullName()
    const randomEmail = `${randomName.replace(" ",'')}${faker.number.int(50)}@gmail.com`
 
    await input.inputValue(randomEmail, "123456")
    await input.checkboxes(true)
})