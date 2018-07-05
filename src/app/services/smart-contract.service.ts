import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service'
import { User } from '../models/user';
import { AcquiredAssets } from '../models/acquired-assets';
import { Asset } from '../models/asset';
import { CreatedAsset } from '../models/created-asset';

declare let require: any;
declare let window: any;
const Web3 = require('web3');
const tokenABI = require('./contract-one.json');

declare var M:any;

@Injectable()
export class SmartContractService {

  public cryptoUser: boolean = false;
  public userAccountAddress: Promise<string> = null;

  private web3: any;
  private _tokenContractAddress = '0x6e0bec7cd4c786919329dc1025c4cf8cf951bbd2';
  private instance: any;

  constructor(private router: Router, private fireService: FirebaseService) {
    this.bootstrapWeb3();
  }

  public bootstrapWeb3() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      this.cryptoUser = true
    } else {
      this.cryptoUser = false;
      if (this.router.url != '/') {
        this.router.navigate(['/']);
        alert('Haven\'t used ethereum? You should consider trying MetaMask!');
      }

      // // // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      // // Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // // // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // // this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    if (this.cryptoUser == true) {
      this.instance = this.web3.eth.contract(tokenABI).at(this._tokenContractAddress);
    }
    // console.log(this.instance)
  }

  public async getUserAccount(): Promise<string> {
    this.userAccountAddress = await new Promise((resolve, reject) => {
      this.web3.eth.getAccounts((err, accs) => {
        if (err) {
          alert('ocurrió un error al traer la dirección de tu cuenta');
          this.router.navigate(['/'])
          return;
        } else if (accs.length === 0) {
          alert(
            'Couldn\'t get your metamask account.'
          );
          this.router.navigate(['/'])
          return
        } else {
          if (this.router.url == '/register') {


            // this.router.navigate(['/']);
            // alert('You are already registered');
          }
          resolve(accs[0])
        }
      })
    }) as Promise<string>;

    this.web3.eth.defaultAccount = this.userAccountAddress;
    return Promise.resolve(this.userAccountAddress);
  }

  setUser(user: User) {
    let FullName = `${user.name} ${user.lastname}`
    this.instance.setUser(user.role, FullName, (err, res) => {
      if (!err) {
        console.log(`Success with${res}`);

        /////Registro en firebase
        this.fireService.addNewUser(user);

      } else {
        console.log(`Failed with ${err}`);
      }
    })
  }

  setSale(acquiredAssets: AcquiredAssets) {
    this.instance.setSale(acquiredAssets.assetSha256Hash, (err, data) => {
      if (!err) {
        this.fireService.registerNewSell(acquiredAssets)
      }
    });
  }


  setDeal(a: Asset, createdAsset: CreatedAsset) {
    this.instance.setDeal(a.assetSha256Hash, a.price, a.expertAddress, a.expertPercentage, a.userAddress, a.userPercentage, (err, res) => {
      if (!err) {
          this.fireService.addNewContent(a)
          this.fireService.registerCreation(createdAsset)
          M.toast({ html: "Se ha registrado el contrato exitosamente" })
          this.router.navigate(['/user'])
        }else{
          M.toast({ html: "En error ocurred, please try again." })
        }
    });
  }

  watchUsers() {
    console.log(this.instance.watchUsers());
  }
}

