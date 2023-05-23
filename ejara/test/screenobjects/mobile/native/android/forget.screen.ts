import EjaraScreen from "./base.screen";
import IPasswordForgetScreen from "../common/forget.password.screen";
import CodeGenerateScreen from "./code.generate.screen";

export default class PasswordForgetScreen extends EjaraScreen implements IPasswordForgetScreen {

    private static sendEmailButtonLocator = 'android=new UiSelector().resourceId("sendEmail")';

    async sendMail(email: string): Promise<CodeGenerateScreen> {

        await (await driver.$(PasswordForgetScreen.sendEmailButtonLocator)).click();
        
        return new CodeGenerateScreen(); 
    }

}
