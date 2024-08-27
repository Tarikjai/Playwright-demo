import {Page} from "@playwright/test";


export class NavigationPage {

    readonly page : Page

    constructor(page: Page){
        this.page = page
    }

    async authPage(){
        await this.page.getByText('Form Authentication').click()

    }

    async CheckboxesPage(){
        await this.page.getByText('Checkboxes').click()

    }



}