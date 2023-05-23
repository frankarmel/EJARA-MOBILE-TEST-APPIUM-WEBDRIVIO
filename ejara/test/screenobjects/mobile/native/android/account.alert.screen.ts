import EjaraScreen from "./base.screen";
import IDecideAccountStatusScreen from "../common/account.alert.screen";
import SignInScreen from "./signin.screen";


export default class DecideAccountStatusScreen  extends EjaraScreen implements IDecideAccountStatusScreen{
    accountRegisterFailed(): Promise<any> {
        return Promise.resolve(undefined);
    }

    async accountRegisterSuccessful(): Promise<SignInScreen> {
        return new SignInScreen();
    }

}
