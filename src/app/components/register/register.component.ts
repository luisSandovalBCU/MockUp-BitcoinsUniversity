import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartContractService } from '../../services/smart-contract.service';
import { User } from '../../models/user'
import { FirebaseService } from '../../services/firebase.service'
declare var M: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  registerUser: boolean = true;
  userAccountAddress: any = "Account Address Not reachable";
  userInfo: User = {
    id: '',
    name: '',
    lastname: '',
    role: null,
    address: '',
    email: '',
    profilePicture: 'https://firebasestorage.googleapis.com/v0/b/mockups-e88f2.appspot.com/o/userProfilePics%2Fuser-icon.png?alt=media&token=350ccfd0-313a-4ae3-9d24-4dcbe2dd1a6d',
    coverPicture: 'https://firebasestorage.googleapis.com/v0/b/mockups-e88f2.appspot.com/o/coverPics%2Fcover.jpg?alt=media&token=9b19a152-3e1d-483c-8137-c55bfc3eb51e',
  }

  constructor(private contractServices: SmartContractService, private router: Router, private fireService: FirebaseService) { }

  ngOnInit() {

    if (this.contractServices.cryptoUser != false) {
      this.contractServices.getUserAccount()
        .then(account => {
          ///******************************/
          ///Solidity
          this.userAccountAddress = account;
          this.userInfo.address = account

          ///******************************/
          ///Firebase
          this.fireService.getUserAddress(account)
          this.fireService.getUserInfo().subscribe(data => {
            data.forEach(info => {
              if (info['address']) {
                this.registerUser = false;
                this.router.navigate(['/']);
              }
            })
          });
        });

    }


    var selectElemsOption = new Object();
    var selectElems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selectElems, selectElemsOption);
  }

  sendRegistrationData() {
    /////Registro en ethereum
    this.contractServices.setUser(this.userInfo);
  }

}
