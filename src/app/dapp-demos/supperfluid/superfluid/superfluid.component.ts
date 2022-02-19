import { Component, OnInit } from '@angular/core';
import { getDefaultProvider, providers } from 'ethers';
//import detectProvider from '@metamask/detect-provider'
//import {Framework} from '@superfluid-finance/sdk-core'
import { AngularContract } from 'angular-web3';
import { fUSDCx_address, fUSDC_address } from './config';
import { fUSDCxabi } from './abis/fUSDCxabi';
import { ERC20abi } from './abis/erc20abi';

declare var window: any;

@Component({
  selector: 'superfluid-master',
  templateUrl: './superfluid.component.html',
  styleUrls: ['./superfluid.component.css'],
})
export class SuperfluidComponent implements OnInit {
  constructor() {}

  async initWeb3() {
    //

    const provider = new providers.Web3Provider(window.ethereum, 'any');
    // Prompt user for account connections
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    console.log('Account:', await signer.getAddress());
    if (provider) {
      // const sf = await Framework.create({
      //   networkName: "matic",
      //   provider: provider,
      // });
      // const metaMaskSigner = sf.createSigner({ web3Provider: provider });
      // const contractUsdc = new AngularContract({
      //   name:"USDC",
      //   address:fUSDC_address,
      //   abi:ERC20abi
      // })
      // const contractUsdcx = new AngularContract({
      //   name:"USDCX",
      //   address:fUSDCx_address,
      //   abi:fUSDCxabi
      // })
    }
  
  }

  ngOnInit(): void {}
}
