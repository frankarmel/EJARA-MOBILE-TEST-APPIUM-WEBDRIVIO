import EjaraScreen from "./base.screen";
import IRegisterAccountScreen from "../common/register.screen";
import DecideAccountStatusScreen from "./account.alert.screen";

export default class RegisterAccountScreen  extends EjaraScreen implements IRegisterAccountScreen {

    private static mobileLocator = 'android=new UiSelector().resourceId("contact")';
    private static passwordLocator = 'android=new UiSelector().resourceId("password")'
    private static parentLocator = 'android=new UiSelector().resourceId("parent")';
    private static proceedButtonLocator = 'android=new UiSelector().resourceId("register")';

    async register(phone: string, password: string, parent?: string): Promise<any> {
        await this.typeAfterClicking(
            RegisterAccountScreen.mobileLocator,
            phone
        );
        await this.typeAfterClicking(
            RegisterAccountScreen.passwordLocator
            ,
            password
        );

        if (parent != undefined) {
            await this.typeAfterClicking(
                RegisterAccountScreen.parentLocator
                ,
                parent
            );
        }

        await (await driver.$(RegisterAccountScreen.proceedButtonLocator)).click();

        return new DecideAccountStatusScreen();
    }
}
