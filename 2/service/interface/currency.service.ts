import { BehaviorSubject } from "rxjs";
import { Asset } from "../../model/interface/asset";
import { Currency } from "../../model/interface/currency";
import { Model } from "../../model/interface/model";
import { Service } from "./service";

export abstract class CurrencyService<Currency> extends Service<Asset> {
	// currencyList: BehaviorSubject<Currency[]>;
	// public constructor(currencyList : BehaviorSubject<Currency[]>) {
		public constructor() {
		super();
		// this.currencyList = currencyList;
	}


	// todo implement this method
	public findBySymbol(s: string): Currency {		
		//TODO : implement this one
		let currencyList=[];
		this.list.map(o=>currencyList.push(o));
		return <Currency>currencyList.find(o=>o.symbol==s);
	}

	// todo implement this method
	public findByName(name: string): Currency {
		let currencyList=[];
		this.list.map(o=>currencyList.push(o));
		return <Currency>currencyList.find(o=>o.name==name);
	}

}
