import { BaseStore } from "./base_store";

export class BaseWallet extends BaseStore{
    
    private is_default: boolean = false;
    private name: string = "";
    
    constructor(id: string, is_default: boolean, name: string, balance: string ) {
        super(balance); 
        this.is_default = is_default;
        this.name=name;        
    }

  
    //todo implement me
    protected isDefault(): boolean {
        return this.is_default;
    }
    
    //todo implement me
    protected setDefault(b: boolean): void {
        this.is_default=b;
    }

    //todo implement me
	public getName(): string {
        return this.name;
	}
}