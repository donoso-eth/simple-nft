import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNftExampleComponent } from './simple-nft-example/simple-nft-example.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { blockchain_imports, blockchain_providers } from './blockchain_wiring';
import { OnChainService } from './on-chain.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { IpfsUploadComponent } from './ipfs-upload/ipfs-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IpfsDownloadComponent } from './ipfs-upload/ipfs-download.component';



@NgModule({
  declarations: [
    SimpleNftExampleComponent,
    IpfsUploadComponent,
    IpfsDownloadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,

    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    NgJsonEditorModule,
    blockchain_imports
  ],
  providers:[...blockchain_providers,OnChainService],
  exports: [
    SimpleNftExampleComponent
  ]
})
export class SimpleNftExampleModule { }
