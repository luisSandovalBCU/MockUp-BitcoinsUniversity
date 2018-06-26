import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertComponent  } from './components/expert/expert.component';
import { UserComponent } from './components/user/user.component';
import { DesignerComponent } from './components/designer/designer.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateAssetComponent } from './components/create-asset/create-asset.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'expert', component: ExpertComponent},
  {path: 'designer', component: DesignerComponent},
  {path: 'video', component:VideoComponent },
  {path: 'videoSearch', component: VideoSearchComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'createAsset', component: CreateAssetComponent },
  {path: '', component: HomeComponent },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
