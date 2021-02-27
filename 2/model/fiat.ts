import { Currency } from "./interface/currency";

export class Fiat extends Currency {
	public getPrecision(): number {
		return this.precision;
	}

	private precision: number = 2;

	public constructor(id, symbol, name) {
		super();
		this.setId(id);
		this.symbol = symbol;
		this.name = name;
	}

}

