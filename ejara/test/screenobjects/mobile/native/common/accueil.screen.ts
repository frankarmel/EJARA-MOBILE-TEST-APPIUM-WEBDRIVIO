import IRegisterAccountScreen from "./register.screen";
import ISignInScreen from "./signin.screen";

export default interface IWelcomeScreen {
    createAccount():Promise<IRegisterAccountScreen>;
    signIn():Promise<ISignInScreen>
}
