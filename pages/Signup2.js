exports.SignUpPage2 = class SignUpPage2 {

    constructor (page) {

        this.page = page
        this.firstname = page.locator('[data-test="first-name"]')
        this.lastname = page.locator('[data-test="last-name"]')
        this.email = page.locator('[data-test="email"]')
        this.degree = page.locator('[data-test="Master\\\'s\\/MBA\\/PhD"]')
        this.course = page.locator('[data-test="mark-course-selected-cta-Computer Science"]')
        this.createacc = page.locator('[data-test="create-account-cta"]')
    }

    
    async SignUp2 (firstname, lastname, emailid){

        await this.firstname.fill (firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(emailid)
        await this.degree.click();
        await this.course.click();
        await this.createacc.click();

      
 
     }



}   