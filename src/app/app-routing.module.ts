import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { EngagementGalleryComponent } from './engagement-gallery/engagement-gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'engagement-gallery', component: EngagementGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
