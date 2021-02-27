import { BaseWalletModel } from "./base_wallet_model";

export class BaseStore extends BaseWalletModel{
    private balance: string = "";

    constructor(balance: string) {
        super();
        this.balance=balance;
    }

    public getId(){
        return this.getId();
    }

    public setId(id: any){
        return this.setId(id);
    }
    
    public reduceBalance(amount: number): void {
        //todo implement me
        this.balance = (+this.balance-amount).toString();
    }

    public addBalance(amount: number): void {
        //todo implement me
        this.balance = (+this.balance+amount).toString();
    }


    public setBalance(balance: number): void {
        //todo implement me
        this.balance = balance.toString();
    }

    public getBalance(): number {
        //todo implement me
        return +this.balance;
    }
}