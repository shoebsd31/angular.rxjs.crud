import { Currency } from "../../model/interface/currency";
import { Model } from "../../model/interface/model";
import { CurrencyService } from "./currency.service";

export abstract class AssetService<Asset> extends CurrencyService<Model> {

	public constructor() {
		super();
	}
}
