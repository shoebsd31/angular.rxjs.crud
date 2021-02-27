import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import {MatFormFieldModule} from '@angular/material/form-field'
import { CryptocoinService } from "../2/service/cryptocoin.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
import { CryptocoinComponent } from './app/cryptocoin/cryptocoin.component';
import { MetalComponent } from './app/metal/metal.component';
import { MetalService } from "../2/service/metal.service";

@NgModule({
  imports: [
    BrowserModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule ,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, CryptocoinComponent, MetalComponent],
  providers: [CryptocoinService, MetalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
