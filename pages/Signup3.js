exports.SignUpPage3 = class SignUpPage3 {

    constructor (page) {

            this.page = page
             this.countryselect = page.getByPlaceholder('Select country')
             this.country1 = page.getByRole('heading', { name: 'Australia' })
             this.againcoountryselect = page.locator('#webInput')
             this.country2 = page.getByRole('heading', { name: 'Switzerland' })
             this.year = page.locator('[data-test="select-year-3"]')
             this.term = page.locator('[data-test="select-term-Spring"]')
             this.customisecta = page.locator('[data-test="customise-button"]')

    }


    async SignUp3 () {

        await this.countryselect.click();
        await this.country1.click();
        await this.againcoountryselect.click();
        await this.country2.click();
        await this.year.click();
        await this.term.click();
        await this.customisecta.click();
}

}