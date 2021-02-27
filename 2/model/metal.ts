import { Asset } from "./interface/asset";

export class Metal extends Asset {
	public getPrecision(): number {
		return this.precision_for_metals;
	}

	private precision_for_metals: number = 3;

	public constructor(id, name, symbol, price) {
		super();
		this.setId(id);
		this.name = name;
		this.symbol = symbol;
		this.avg_price = price;
	}

}
