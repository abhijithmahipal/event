import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementVideoComponent } from './engagement-video.component';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule
  ],
  declarations: [EngagementVideoComponent]
})
export class EngagementVideoModule { }
