import { Asset } from "./interface/asset";

export class Cryptocoin extends Asset {
	public getPrecision(): number {
		return this.precision_for_coins;
	}

	protected precision_for_coins: number = 4;

	public constructor(id, name, symbol, price) {
		super();
		this.setId(id);
		this.name = name;
		this.symbol = symbol;
		this.avg_price = price;
	}

}
