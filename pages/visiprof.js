exports.visiprof = class visiprof {


constructor (page) {

this.page = page
this.applications = page.locator ('xpath = //ul[@class="flex list-reset min-h-max"]/li[2]')
this.universityclick = page.locator ('xpath = //div[@data-test="my-application-univeristy-name-1"]')
}


async tabsclick () {

   await this.applications.click();

}


async univer () {

await this.universityclick.click ();

}



}