import { BaseWallet } from "./base_wallet";

export class MetalWallet extends BaseWallet{

    private metal_id: string = "";
    private deleted: boolean = false;
    constructor(id:string, is_default:boolean, name: string,balance: string) {
        super(id,is_default,name,balance);
    }

	//todo implement me
    public getMetalId(): string {
        return this.metal_id;
    }

	//todo implement me
    public setMetalId(id: string): void {
        this.metal_id=id;
    }

	

}
