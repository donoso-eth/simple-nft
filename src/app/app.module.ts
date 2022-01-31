import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldContractModule } from './dapp-demos/1-hello-world-contract/hello-world-contract.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNftExampleModule } from './dapp-demos/3-simple-nft-example/simple-nft-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldContractModule,
    BrowserAnimationsModule,
    SimpleNftExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
