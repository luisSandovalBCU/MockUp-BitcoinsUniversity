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
  private _tokenContractAddress = '0x3823ffe632bb987a4c241be6d3e27da5bf45f329';
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

  // setVideoPrice(price : number ){
  //   // alert(`El precio es ${price}`)
  //   this.instance.setNum(this.web3.toWei(price, 'ether'), (err, res) =>{
  //     if(!err){
  //       console.log(`Si sale parce, salí re bien: ${res}`);
  //     }else{
  //       alert('Ocurrió un error x(  .')
  //     }
  //   });
  // }


  setUser(Role: number, Name: string){
    alert(`Se registra: ${Name} con rol ${Role}`)
    this.instance.setUser(Role, Name, (err, res) =>{
      if(!err) {
        alert(res);
      } else {
        alert(err);
      }
    })
  }

  /*var NewUserEvent = Videonizer.NewUser();

NewUserEvent.watch(function (error, result) {
if (!error) {
$("#loader").hide();
$("#instructor").html(result.args.uRole);
} else {
$("#loader").hide();
console.log(error);
}
});

$("#AddUser").click(function () {
alert("Add User Button Reached")
$("#loader").show();
Videonizer.setUser(1,(err,res)=>{
if(!err) {
alert(res);
}
else {
alert(err);
}
});
console.log("Add User Button Reached");
}); 

*/

}

