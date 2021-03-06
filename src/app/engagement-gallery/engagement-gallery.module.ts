import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementGalleryComponent } from './engagement-gallery.component';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule
  ],
  declarations: [EngagementGalleryComponent]
})
export class EngagementGalleryModule { }
