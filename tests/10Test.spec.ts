import {test} from '../test-options'
import { FormPage } from '../page-object/FormPage'
import {faker} from "@faker-js/faker"
/*
test.beforeEach(async({page}) => {
    await page.goto('/')
   
})*/

test('Value ', async ({page, FormFieldsPage })=> {
    
    const input = new FormPage(page)
    const randomName = faker.person.fullName()
    const randomEmail = `${randomName.replace(" ",'')}${faker.number.int(50)}@gmail.com`

    // await page.getByText('Form Fields').click()
    
    await input.inputValue(randomEmail, "123456")
    await input.checkboxes(true)
})