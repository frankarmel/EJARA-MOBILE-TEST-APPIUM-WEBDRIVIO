export default class EjaraScreen{
    protected async typeAfterClicking(locator:string,value:string){
        let el = await driver.$(locator);
        await el.click();
        await el.setValue(value);
    }
}
