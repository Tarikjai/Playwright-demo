import {Page} from '@playwright/test'

export class FormPage {

    readonly page: Page;

    constructor(page : Page){
        this.page = page
    }

        async inputValue(name: string, password: string){
            await this.page.getByRole('textbox', {name:"Name"}).fill(name)
            await this.page.getByRole('textbox', {name:"Password"}).fill(password)
        }

        async checkboxes(check : boolean){
            if(check){ 
            await this.page.getByRole('checkbox', {name:'Water'}).click()
            await this.page.getByRole('checkbox', {name:'Wine'}).check()
            await this.page.getByRole('checkbox', {name:'Milk'}).click()
            await this.page.getByRole('checkbox', {name:'Coffe'}).check()
        }
        }

}
