import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartContractService } from '../../../services/smart-contract.service';
import { FirebaseService } from '../../../services/firebase.service';
import { User } from '../../../models/user';

declare var M: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  constructor(private router: Router, private contractServices: SmartContractService, private fireService: FirebaseService) { }
  userAccountAddress: any = "Not reachable";
  userInfo: User[];

  ngOnInit() {
    let parallaxUserCover = document.getElementById('parallaxUserCover') as HTMLImageElement;


    ///******************************/
    ///Solidity
    if (this.contractServices.cryptoUser != false) {
      this.contractServices.getUserAccount()
        .then(account => {
          this.userAccountAddress = account;
          ///******************************/
          ///Firebase
          this.fireService.getUserAddress(account)
          this.fireService.getUserInfo().subscribe(queriedItems => {
            this.userInfo = queriedItems;

            ///Acá se recupera la imagen de cover que haya puesto el usuario
            queriedItems.forEach(item => {
              if (item['coverPicture']) {
                parallaxUserCover.src = item['coverPicture'];
              }
            })

            //console.log(this.userInfo)
          });
        });
    }


    ///******************************/
    ///Inicializaciones para materialize
    var parallaxOptions = new Object();
    var parallaxElems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(parallaxElems, parallaxOptions);


  }

}
