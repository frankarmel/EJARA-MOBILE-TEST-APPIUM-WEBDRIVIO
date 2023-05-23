import EjaraScreen from "./base.screen";
import SignInScreen from "./signin.screen";
import IWelcomeScreen from "../common/accueil.screen";
import RegisterAccountScreen from "./register.screen";

export default class WelcomeScreen  extends EjaraScreen implements IWelcomeScreen{

    private static signupButtonLocator = 'android=new UiSelector().resourceId("signup")';
    private static signinButtonLocator = 'android=new UiSelector().resourceId("signin")';

    async createAccount(): Promise<RegisterAccountScreen> {
        await (await driver.$(WelcomeScreen.signupButtonLocator)).click();
        return new RegisterAccountScreen();
    }

    async signIn(): Promise<SignInScreen> {
        await (await driver.$(WelcomeScreen.signinButtonLocator)).click();
        return new SignInScreen();
    }

}
