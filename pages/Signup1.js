exports.SignUpPage1 = class SignUpPage1 {

    constructor (page) {

        this.page = page
        this.phoneno = page.locator('[data-test="mobile-input"]')
        this.reqotpcta = page.locator('[data-test="request-otp-button"]')
        this.wait = page.waitForLoadState("networkidle");
    }


   async SignUp (mobileno){

       await this.phoneno.fill (mobileno)
       await this.wait
       await this.reqotpcta.click (); 

    }

    async wait () {

        await this.wait
    }
    











}