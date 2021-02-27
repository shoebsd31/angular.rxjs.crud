import { BaseStore } from "./base_store";

export class FiatWallet extends BaseStore{

    private fiat_id: string = "";
    private name: string = "";

    constructor(balance: string) {
        super(balance);
        
    }

	//todo implement me
    public getFiatId(): string {
        return this.fiat_id;
    }

	//todo implement me
    public setFiatId(id: string): void {
        this.fiat_id=id;
    }


	//todo implement me
    public getName(): string {
        return this.name;
    }

}
