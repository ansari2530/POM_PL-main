exports.header = class header {

    constructor (page) {

         this.page = page
         this.explore = page.locator('xpath = //div[@id="university-explore-button"]')
         this.connect = page.locator('xpath = (//a[@id="connect-feature"])[1]')
         this.wait = page.waitForLoadState("networkidle");
         
    }

async exploreclick () {

    await this.explore.click ();
}

async connectclick () {

    await this.wait
    await this.connect.click ();
}


}