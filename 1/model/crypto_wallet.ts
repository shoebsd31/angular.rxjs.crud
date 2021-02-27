import { BaseWallet } from "./base_wallet";

export class CryptoWallet extends BaseWallet{
    private cryptocoin_id: string = "";    
  
    private deleted: boolean = false;
    
    constructor(id:string, is_default:boolean, name: string, balance: string) {
        super(id,is_default,name,balance);
    }

	//todo implement me
    public getCryptocoinId(): string {
        return this.cryptocoin_id;
    }

	//todo implement me
    public setCryptocoinId(id: string): void {
        this.cryptocoin_id=id;
    }





}
 