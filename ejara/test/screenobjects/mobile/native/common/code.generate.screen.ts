export default interface ICodeGenerateScreen {
    verifyCode(code:string):Promise<any>
}
