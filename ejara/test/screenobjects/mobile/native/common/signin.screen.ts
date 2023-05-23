import ISignInStatusScreen from "./signin.alert.screen";

export default interface ISignInScreen {
    login(username:string,password:string):Promise<ISignInStatusScreen>
}
