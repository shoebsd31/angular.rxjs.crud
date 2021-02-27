import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cryptocoin } from '../../../2/model/cryptocoin';
import { CryptocoinService } from '../../../2/service/cryptocoin.service';
import { COINS } from '../../../static_model/cryptocoins';

@Component({
  selector: 'app-cryptocoin',
  templateUrl: './cryptocoin.component.html',
  styleUrls: ['./cryptocoin.component.scss']
})
export class CryptocoinComponent implements OnInit {

 	// todo: if you want (would be appreciated) you can use the serives from the second task instead
   public coins: Cryptocoin[] = COINS;
   
   searchId: String;
   searchSymbol: String;
   searchName: String;
   public cr:Cryptocoin;
   public foundCR:Cryptocoin;
   displayedColumns: string[] = ['id','name', 'symbol', 'avg_price'];
   options: FormGroup;
   hideRequiredControl = new FormControl(false);
   floatLabelControl = new FormControl('auto');
   
   public constructor(public cryptocoinService : CryptocoinService,fb: FormBuilder) {
     this.cr=new Cryptocoin("","","","");	
     this.options = fb.group({
       hideRequired: this.hideRequiredControl,
       floatLabel: this.floatLabelControl,
       id:new FormControl(),
 
       });
   }
   ngOnInit(): void {
     this.cryptocoinService.list=this.coins;		
   }
 
   onSubmit(): void {
     this.cryptocoinService.upsert(this.cr);
   }
 
   read(){
     return this.cryptocoinService.getList().subscribe(o=>{
       console.log("returned data : ",o);
     });
   }
   update(){
     this.cryptocoinService.updateItem(this.cr,"222");
   }
   delete(cryptcoin:Cryptocoin){
     this.cryptocoinService.deleteItem(cryptcoin);
   }
 
   findById(searchId: string)
   {
     this.foundCR =<Cryptocoin>this.cryptocoinService.getItemById(searchId);
   }
 
   findBySymbol(searchSymbol: string){
     this.foundCR = <Cryptocoin>this.cryptocoinService.findBySymbol(searchSymbol);
   }
   findByName(searchName: string){
     this.foundCR = <Cryptocoin>this.cryptocoinService.findByName(searchName);
   }

}
