import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Cryptocoin } from "../model/cryptocoin";
import { AssetService } from "./interface/asset.service";
@Injectable()
export class CryptocoinService extends AssetService<Cryptocoin> {
  constructor() {
    super();
    this._list = new BehaviorSubject<Cryptocoin[]>([]);
  }
}
