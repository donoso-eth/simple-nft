import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SuperfluidModule } from './dapp-demos/supperfluid/superfluid.module';
// import { HelloWorldContractModule } from './dapp-demos/1-hello-world-contract/hello-world-contract.module';

// import { SimpleNftExampleModule } from './dapp-demos/3-simple-nft-example/simple-nft-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuperfluidModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
