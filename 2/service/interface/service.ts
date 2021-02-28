import { BehaviorSubject } from "rxjs";
import { Model } from "../../model/interface/model";

export abstract class Service<M extends Model> {
  protected _list: BehaviorSubject<M[]> = new BehaviorSubject<M[]>([]);
  // todo implement this method
  public destroy(): void {
    // clear the list
    this.list=[];
  }

  public constructor() {}

  // todo implement this method
  public updateItem(m: M, id: string = m.getId()): void {
    this._list.next(this.list.filter((d) => d.getId() !== id));
    this.addItem(m);
  }

  // todo implement this method
  public upsert(m: M): void {
    var foundItem = this.list.find((o) => o.getId() === m.getId());

    if (foundItem) {
      this.updateItem(m, m.getId());
    } else {
      this.addItem(m);
    }
    console.log("after upsert : ", this.list);
  }

  // todo implement this method
  public hasItem(m: M): boolean {
    return this.list.some((o) => o.getId() == m.getId());
  }

  // todo implement this method
  public addItem(m: M): void {
    this.list = [...this.list, m];
  }

  // todo implement this method
  public getItemById(id: string): M {
    return this.list.find((o) => o.getId() === id);
  }

  // todo implement this method
  public getList(): BehaviorSubject<M[]> {
    return this._list;
  }

  // todo implement this method
  public get list(): M[] {
    return this._list.value;
  }

  // todo implement this method
  public set list(m: M[]) {
    this._list.next(m);
  }

  // todo implement this method
  public deleteItem(m: M): void {
    this.list = this.list.filter((o) => o.getId() !== m.getId());
  }
}
