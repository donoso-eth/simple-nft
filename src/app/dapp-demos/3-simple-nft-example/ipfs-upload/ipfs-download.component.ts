import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonEditorOptions } from 'ang-jsoneditor';
declare global {
  interface Window {
    IpfsHttpClient:any;
  }
}


@Component({

  selector: 'ipfs-download',
  template: `
    <p>
    <input [formControl]="ipfs_cid"   matInput placeholder="Your CID"  />
     
      <button  (click)="uploadJson()" style="margin-top: 40px;" mat-raised-button color="accent">Donwload from</button>
      <mat-form-field   style="margin-top: 10px;width: 100%;background: #d3d3d39e;" class="example-full-width" appearance="fill">
    
     
      </mat-form-field>
    </p>
  `,
  styles: [`:host ::ng-deep json-editor,
  :host ::ng-deep json-editor .jsoneditor,
  :host ::ng-deep json-editor > div,
  :host ::ng-deep json-editor jsoneditor-outer {
    height: 375px;
  }`],
})
export class IpfsDownloadComponent implements OnInit {
  ipfs_cid: FormControl = new FormControl('');
  ipfs_input: FormControl = new FormControl();
  myJson = {
    description: "It's actually a bison?",
    external_url: 'https://austingriffith.com/portfolio/paintings/',
    image: 'https://austingriffith.com/images/paintings/buffalo.jpg',
    name: 'Buffalo',
    attributes: [
      { trait_type: 'BackgroundColor', value: 'green' },
      { trait_type: 'Eyes', value: 'googly' },
    ],
  };
  uploading = true;
  editorOptions: JsonEditorOptions;
  id!: string;
  version!: string;
  status!: string;
  constructor() {
    this.ipfs_input.setValue(this.myJson)
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code'; // set all allowed modes
  }

  async uploadJson(){
    const ipfs = window.IpfsHttpClient.create({ host: "ipfs.infura.io", port: 5001, protocol: "https" })


    this.uploading = true;
    const result = await ipfs.add(JSON.stringify(this.ipfs_input.value));

    if (result && result.path) { 
      this.ipfs_cid.setValue(result.path)
    }
    this.uploading = false;
  }

  getData(json: any) {
    console.log(json);
    //this.myJson = json
  }



  ngOnInit(): void {

  }
}
