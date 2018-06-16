import { Component, OnInit } from '@angular/core';
import { SmartContractService } from '../../services/smart-contract.service'

declare let require: any;
var sha256 = require('js-sha256').sha256;
declare var M:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  userAccountAddress: any = "Algo";

  Nombre: string;
  Apellido: string;
  Role: number;

  constructor(private contractServices: SmartContractService) { }

  ngOnInit() {

    if (this.contractServices.crytoUser != false) {
      this.contractServices.getUserAccount()
        .then(account => {
          this.userAccountAddress =  account;
        })
    }

    var selectElemsOption = new Object(); 
    var selectElems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selectElems, selectElemsOption);
  }

  sendRegistrationData(){
    let FullName  = this.Nombre +' '+ this.Apellido 
    this.contractServices.setUser(this.Role, FullName); 
  }

}
