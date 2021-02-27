import { Currency } from "./currency";


export abstract class Asset extends Currency {

	protected precision_for_fiat_price: number = -1;
	protected avg_price: string = "";

}

