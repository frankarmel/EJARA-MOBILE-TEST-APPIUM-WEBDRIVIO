import EjaraScreen from "./base.screen";
import ISignInStatusScreen from "../common/signin.alert.screen";
import HomeScreen from "../../flutter/home.screen";

export default class SigninAlertScreen  extends EjaraScreen implements ISignInStatusScreen{
    signInFailed(): Promise<any> {
        return Promise.resolve(undefined);
    }

    async signInSuccessful(): Promise<HomeScreen> {
        return new HomeScreen();
    }

}
