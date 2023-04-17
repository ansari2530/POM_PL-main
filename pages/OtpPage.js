exports.OtpPage = class OtpPage {

    constructor (page) {

        this.page = page
        this.otpfield = page.locator('#firstInput')
        this.verifycta = page.locator('[data-test="verify-otp-button"]')
    }

    async OTP () {

        await this.otpfield.fill ('215874')
        await this.verifycta.click();
    }


}