export default class HomePage {
    readonly page: Page;
    readonly signUpButton : Locator;
    readonly signInButton : Locator;


    constructor(page: Page){
        this.page = page;
        this.signUpButton = page.getByText('Sign Up')
        this.signInButton = page.locator('//*[contains(@class, "header_signin")]');
    }


    async open(){

	@@ -17,4 +19,8 @@ export default class HomePage {
        await this.signUpButton.click();
    }


    async clickSignInButton(){
        await this.signInButton.click();
    }


}