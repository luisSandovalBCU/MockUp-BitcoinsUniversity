import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
// import Web3 from 'web3';
declare let require: any;
declare let window: any;
const Web3 = require('web3');

@Injectable()
export class SmartContractService {

  public tokenABI = require('./contract-one.json');

  private _tokenContract: any;
  private _tokenContractAddress = '0x3e7b4d4ff330797ae1fb448310c99bcf80f51601';

  private web3: any;
  private accounts: string[];
  public accountsObservable = new Subject<string[]>();


  constructor() {
      this.bootstrapWeb3();
  }


  public bootstrapWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    this._tokenContract = this.web3.eth.contract(this.tokenABI).at(this._tokenContractAddress);

  }


  printRandomInfo() {
    console.log(this.web3 )
  }






}
