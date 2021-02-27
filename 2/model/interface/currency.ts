import { Model } from "./model";

export abstract class Currency extends Model {

	protected name: string = "";

	protected symbol: string = "";

	public abstract getPrecision(): number;

}
