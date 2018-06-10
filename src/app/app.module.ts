import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SmartContractService  } from './services/smart-contract.service'

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
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SmartContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
