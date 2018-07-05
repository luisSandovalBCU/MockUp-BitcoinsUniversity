import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service'
import { SmartContractService } from '../../../services/smart-contract.service'
import { Observable } from 'rxjs/Observable'
import { Asset } from '../../../models/asset';
import { AcquiredAssets } from '../../../models/acquired-assets'

declare var M: any;

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: []
})
export class VideoListComponent implements OnInit {

  modalInstances: any;
  modalInstanceEdit: any;
  VideoPriceToSell: any = 0.04;
  showDescription: boolean = false;
  userAccountAddress

  acquiredAssets: AcquiredAssets = {
    assetSha256Hash: '',
    buyerAddress: '',
    dateAcquired: ''
  }


  constructor(private router: Router, private fireStore: FirebaseService, private contractServices: SmartContractService) {
    ///******************************/
    ///Solidity
    if (this.contractServices.cryptoUser != false) {
      this.contractServices.getUserAccount()
        .then(account => {
          this.userAccountAddress = account;
        });
    }
  }

  assetsListShowCase: Asset[];
  AcquiredAssets: any;
  assetsSelectedToView: any;

  ngOnInit() {

    this.fireStore.getContent().subscribe(data => {
      this.assetsListShowCase = data
    });

    let modalOption = new Object();
    let modalElems = document.querySelectorAll('.modal');
    this.modalInstances = M.Modal.init(modalElems, modalOption);
    this.modalInstanceEdit = M.Modal.getInstance(modalElems);
  }



  selectAssetToView(sha256Hash: string) {

    this.fireStore.myAcquiredAssets(this.userAccountAddress).subscribe(data => {
      console.log(data.length)

      if (data.length != 0) {


        data.forEach(video => {

          if (video.assetSha256Hash == sha256Hash) {
            this.router.navigate(['/video'])
          } else {
            this.showVIdeoInformation(sha256Hash)
          }

        })

      } else {

        this.showVIdeoInformation(sha256Hash)
      }
    });
  }

  showVIdeoInformation(sha256Hash: string) {

        ////get the videos information
        this.assetsSelectedToView = '';
        this.fireStore.findAsset(sha256Hash).subscribe(data => {
          data.forEach(data1 => {
            this.assetsSelectedToView = data1;
          })
        });



        //////***************************** */
        ////// Open a modal with information 
        //////***************************** */
        let modalViewContentSelectedElement = document.querySelector('#modalVideoDescription')
        var instance = M.Modal.getInstance(modalViewContentSelectedElement);
        instance.open();

        //////***************************** */
        ///// disable the video at 11th second
        //////***************************** */
        setTimeout(function () {
          let previewVideo = document.getElementById('previewVideo') as HTMLVideoElement;
          previewVideo.onplay = function () {
            setTimeout(() => {
              previewVideo.pause();
              previewVideo.currentTime = 0;
              previewVideo.load();
            }, 11000);
          };
        }, 1000)
  }

  BuyVideo(acquiredAssetSha256Hash: string) {
    let currentDate = new Date().getTime().toString();
    this.acquiredAssets.assetSha256Hash = acquiredAssetSha256Hash;
    this.acquiredAssets.buyerAddress = this.userAccountAddress;
    this.acquiredAssets.dateAcquired = currentDate

    this.contractServices.setSale(this.acquiredAssets);



    this.fireStore.registerNewSell(this.acquiredAssets)
  }
}
