import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Rx';
// import Web3 from 'web3';
declare let require: any;
declare let window: any;
const Web3 = require('web3');

@Injectable()
export class SmartContractService {

  public tokenABI = require('./contract-one.json');


  public metamaskHolder: boolean = false;


  private _tokenContract: any;
  private _tokenContractAddress = '0x3e7b4d4ff330797ae1fb448310c99bcf80f51601';

  private web3: any;
  //private accounts: string[]; 
  private _account: string = null;
  // public accountsObservable = new Subject<string[]>();


  constructor() {
    this.bootstrapWeb3();
  }


  public bootstrapWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      this.metamaskHolder = true
    } else {
      this.metamaskHolder = false;
      // // // alert('No web3? You should consider trying MetaMask!');

      // // // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      // // Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // // // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // // this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    if (this.metamaskHolder == true) {
      this._tokenContract = new this.web3.eth.Contract(this.tokenABI, this._tokenContractAddress);
    }

  }

  public async getAccount(): Promise<string> {
    if (this.metamaskHolder == true) {


      if (this._account == null) {
        this._account = await new Promise((resolve, reject) => {
          this.web3.eth.getAccounts((err, accs) => {
            if (err != null) {
              alert('There was an error fetching your accounts.');
              return;
            }

            if (accs.length === 0) {
              alert(
                'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
              );
              return;
            }
            resolve(accs[0]);
          })
        }) as string;
        this.web3.eth.defaultAccount = this._account;
      }
      return Promise.resolve(this._account);
    }
  }


  // public async getUserAccount(): Promise<string> {
  //   this._account = await this.getAccount();
  //   // console.log(_account)
  //   return this._account;
  // }

  // getUsersAccountAddressFromMetamask(){
  //   return this.web3.currentProvider.publicConfigStore;
  // }



  printRandomInfo() {
    if (this.metamaskHolder == true) {
    // console.log(this.web3.currentProvider.publicConfigStore._state)
    // console.log(this.getUserAccount());
    console.log(window.web3)
    }
  }
}
