exports.myprof = class myprof {


    constructor (page) {


       this.page = page
       this.MPapplication = page.locator('xpath = //ul[@class="flex list-reset min-h-max"]/li[3]')
       this.univname = page.locator ('data-test="my-application-univeristy-name-0"')

    }


    async MPapplicationclick () {

        await this.MPapplication.click ()


    }


    async univnameclick () {


        await this.univname.click ()

    }

}