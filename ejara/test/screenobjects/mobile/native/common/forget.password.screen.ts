import ICodeGenerateScreen from "./code.generate.screen";


export default interface IPasswordForgetScreen {
    sendMail(email:string):Promise<ICodeGenerateScreen>
}
