import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SmartContractService } from '../../services/smart-contract.service'
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage} from 'angularfire2/storage';
import { FirebaseService } from '../../services/firebase.service'
import { User } from '../../models/user';
import { Asset } from '../../models/asset'




declare var M:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  // public videoPrice : number;
  // assetSource: Observable<string>;
  // public showPrice : boolean = true;
  userAccountAddress: any = "Not reachable";
  userInfo: User[];
  assetId: string;


  AssetToWatch =  Asset;

  constructor(private acRoute: ActivatedRoute, public router :Router, public smartContract: SmartContractService, private afStorage: AngularFireStorage, private fireService:FirebaseService) {
    // let fileNameId = this.afStorage.ref('userProfilePics/1530512787860_BC-Video.mp4');
    // fileNameId.getDownloadURL().subscribe(url => {
    //   this.assetSource = url
      
    // })
   }

  ngOnInit() {

    this.acRoute.params.subscribe(params => {
      this.assetId =  params['id'];
      this.fireService.assetDetails(this.assetId)
      .subscribe(data => {
        Object.keys(data).forEach(key=>{

          // console.log(data[key])
          this.AssetToWatch = data[key]
          
          
          console.log(this.AssetToWatch)

        })
      });



   });


    if (this.smartContract.cryptoUser != false) {
      this.smartContract.getUserAccount()
        .then(account => {

          account
          this.fireService.myAcquiredAssets(account).subscribe(data => {
            
            if(data.length == 0){
              this.router.navigate(['/'])
              M.toast({html: `You're not allowed to watch this video`})
            }
          });
          //this.userAccountAddress =  account;
          ///******************************/
          ///Firebase
          
          // this.fireService.
          
          // .subscribe( queriedItems =>{
          //   this.userInfo = queriedItems;
          //   queriedItems.forEach(info => {
              
          //   })
            
          // });
        });
    }



    //***** */
    //Materialize inicializations
    let collapsibleOptions = new Object();
    var collapsibleElems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsibleElems, collapsibleOptions);

    let modalOptions = new Object();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, modalOptions);
  }

  // removePrice(){
  //   this.showPrice = false;
  // }



}
