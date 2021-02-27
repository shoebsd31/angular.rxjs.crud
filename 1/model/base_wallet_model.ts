export class BaseWalletModel{
    private id: string = "";
    
      //todo implement me
      protected getId(): string {
        return this.id;
    }

    //todo implement me
    protected setId(s: string): void {
        this.id = s;
    }

}