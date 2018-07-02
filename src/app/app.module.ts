import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { SmartContractService  } from './services/smart-contract.service'

import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { ExpertComponent } from './components/expert/expert.component';
import { ExpertProfileComponent } from './components/expert/expert-profile/expert-profile.component';
import { DesignerComponent } from './components/designer/designer.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { DesignerProfileComponent } from './components/designer/designer-profile/designer-profile.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { VideoComponent } from './components/video/video.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateAssetComponent } from './components/create-asset/create-asset.component';
import { VideoListComponent } from './components/home/video-list/video-list.component';

import { FileUploadComponent } from './components/file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    ExpertComponent,
    ExpertProfileComponent,
    DesignerComponent,
    UserProfileComponent,
    DesignerProfileComponent,
    HomeComponent,
    SliderComponent,
    VideoComponent,
    VideoSearchComponent,
    RegisterComponent,
    CreateAssetComponent,
    VideoListComponent,
    
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    
  ],
  providers: [
    SmartContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
