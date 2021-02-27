import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Metal } from '../../../2/model/metal';
import { MetalService } from '../../../2/service/metal.service';
import { METALS } from '../../../static_model/metals';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.scss']
})
export class MetalComponent implements OnInit {
 	// todo: if you want (would be appreciated) you can use the serives from the second task instead
   public metals: Metal[] = METALS;
   
   searchId: String;
   searchSymbol: String;
   searchName: String;
   public metal:Metal;
   public foundMetal:Metal;
   displayedColumns: string[] = ['id','name', 'symbol', 'avg_price'];
   options: FormGroup;
   hideRequiredControl = new FormControl(false);
   floatLabelControl = new FormControl('auto');
   
   public constructor(public metalService : MetalService,fb: FormBuilder) {
     this.metal=new Metal("","","","");	
     this.options = fb.group({
       hideRequired: this.hideRequiredControl,
       floatLabel: this.floatLabelControl,
       id:new FormControl(),
 
       });
   }
   ngOnInit(): void {
     this.metalService.list=this.metals;		
   }
 
   onSubmit(): void {
     this.metalService.upsert(this.metal);
   }
 
   read(){
     return this.metalService.getList().subscribe(o=>{
       console.log("returned data : ",o);
     });
   }
   update(){
     this.metalService.updateItem(this.metal,"222");
   }
   delete(metal:Metal){
     this.metalService.deleteItem(metal);
   }
 
   findById(searchId: string)
   {
     this.foundMetal =<Metal>this.metalService.getItemById(searchId);
   }
 
   findBySymbol(searchSymbol: string){
     this.foundMetal = <Metal>this.metalService.findBySymbol(searchSymbol);
   }
   findByName(searchName: string){
     this.foundMetal = <Metal>this.metalService.findByName(searchName);
   }

}
