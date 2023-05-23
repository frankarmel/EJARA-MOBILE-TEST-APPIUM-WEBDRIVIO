import HomeScreen from "../../flutter/home.screen";

export default interface ISignInStatusScreen {
    signInSuccessful():Promise<HomeScreen>;
    signInFailed():Promise<any>;
}
