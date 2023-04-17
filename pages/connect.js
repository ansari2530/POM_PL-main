exports.connect = class connect 

{


constructor (page) {

this.page = page
this.otheruser = page.locator ('xpath = (//div[@data-test="connect-user-name"])[4]')
this.wait = page.waitForLoadState("networkidle");
}



async otheruserclick() {

    await this.wait
    await this.otheruser.click();

}

}