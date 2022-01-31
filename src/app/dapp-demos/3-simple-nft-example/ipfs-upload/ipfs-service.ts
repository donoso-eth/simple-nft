
import { Injectable } from '@angular/core';
declare global {
  interface Window {
    IpfsHttpClient:any;
  }
}




@Injectable({
  providedIn: 'root'
})
export class IpfsService {
 ipfs: any;
 constructor(){

 }

 add(file:any){
   
 }

 init(){
  this.ipfs = window.IpfsHttpClient.create({ host: "ipfs.infura.io", port: 5001, protocol: "https" })

 }
}