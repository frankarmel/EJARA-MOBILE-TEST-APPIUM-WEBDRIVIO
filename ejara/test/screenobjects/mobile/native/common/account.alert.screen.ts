import ISignInScreen from "./signin.screen";

export default interface IDecideAccountStatusScreen {
    accountRegisterSuccessful():Promise<ISignInScreen>;
    accountRegisterFailed():Promise<any>;
}
