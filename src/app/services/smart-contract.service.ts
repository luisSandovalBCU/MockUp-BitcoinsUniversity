import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Rx';
declare let require: any;
declare let window: any;
const Web3 = require('web3');
const tokenABI = require('./contract-one.json');

@Injectable()
export class SmartContractService {
  
  public crytoUser: boolean = false;
  public userAccountAddress: Promise<string> = null;

  private web3: any;
  private _tokenContractAddress = '0xa7f67f1cf70528dcd552cdd9527e1308d3adad8c';
  private instance: any;

  constructor() {
    this.bootstrapWeb3();
  }

  public bootstrapWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      this.crytoUser = true
    } else {
      this.crytoUser = false;
      ///////alert('No web3? You should consider trying MetaMask!');

      // // // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      // // Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // // // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // // this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    if (this.crytoUser == true) {
      this.instance = this.web3.eth.contract(tokenABI).at(this._tokenContractAddress);
    }
    console.log(this.instance)
  }

  public async getUserAccount(): Promise<string>  {
    this.userAccountAddress = await new Promise((resolve, reject) =>{
      this.web3.eth.getAccounts((err, accs) => {
        if(err){
          alert('ocurrió un error al traer la dirección de tu cuenta');
          return;
        }else if(accs.length === 0){
          alert(
            'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
          );
          return
        }else{
          resolve(accs[0])
        }
      })
    }) as Promise<string>;

    this.web3.eth.defaultAccount = this.userAccountAddress;
    return Promise.resolve(this.userAccountAddress);  
  }

  setUser(Role: number, Name: string){
    
    this.instance.setUser(Role, Name, (err, res) =>{
      if(!err) {
        console.log(` Success with${res}`);
      } else {
        console.log(` Fail with ${err}`);
      }
    })
  }

}

