import { BehaviorSubject } from "rxjs";
import { Metal } from "../model/metal";
import { AssetService } from "./interface/asset.service";

export class MetalService extends AssetService<Metal> {
    constructor() {
        super();
        this._list = new BehaviorSubject<Metal[]>([]);
      }
}