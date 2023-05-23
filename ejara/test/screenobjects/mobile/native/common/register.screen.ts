import IDecideAccountStatusScreen from "./account.alert.screen";
import ISignInScreen from "./signin.screen";

export default interface IRegisterAccountScreen {
    register(phone:string,password:string,parent?:string):Promise<IDecideAccountStatusScreen>
}
