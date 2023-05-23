import EjaraScreen from "./base.screen";
import ISignInScreen from "../common/signin.screen";
import ISignInStatusScreen from "../common/signin.alert.screen";
import SigninAlertScreen from "./signin.alert.screen";

export default class SignInScreen  extends EjaraScreen implements ISignInScreen{
    private static mobileLocator = 'android=new UiSelector().resourceId("username")';
    private static passwordLocator = 'android=new UiSelector().resourceId("password")'
    private static proceedButtonLocator = 'android=new UiSelector().resourceId("signin")';

    async login(username: string, password: string): Promise<ISignInStatusScreen> {

        await this.typeAfterClicking(
            SignInScreen.mobileLocator,
            username
        );
        await this.typeAfterClicking(
            SignInScreen.passwordLocator
            ,
            password
        );

        await (await driver.$(SignInScreen.proceedButtonLocator)).click();

        return new SigninAlertScreen();
    }
}
