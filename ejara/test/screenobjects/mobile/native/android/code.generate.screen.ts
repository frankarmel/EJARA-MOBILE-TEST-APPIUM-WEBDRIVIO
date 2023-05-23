import EjaraScreen from "./base.screen";
import ICodeGenerateScreen from "../common/code.generate.screen";


export default class CodeGenerateScreen  extends EjaraScreen implements ICodeGenerateScreen{

    private static codeLocator = 'android=new UiSelector().resourceId("code")';
    private static nextButtonLocator = 'android=new UiSelector().resourceId("continue")';

   async verifyCode(code: string): Promise<any> {

        await this.typeAfterClicking(
            CodeGenerateScreen.codeLocator,
            code
        );

       await (await driver.$(CodeGenerateScreen.nextButtonLocator)).click();

        return Promise.resolve(undefined);
    }

}
