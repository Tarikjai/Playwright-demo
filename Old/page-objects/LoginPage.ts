import {Page} from "@playwright/test";


export class LoginPage {

    readonly page : Page

    constructor(page: Page){
        this.page = page
    }

    async submitLogin() {
        await this.page.getByRole('textbox', {name:"Username"}).fill('standard_user')
        await this.page.getByRole('textbox', {name:"Password"}).fill('secret_sauce')
        await this.page.getByRole('button', {name:'Login'}).click()
        await this.page.getByText('Swag Labs').click()
    }
}