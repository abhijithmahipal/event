import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementGalleryComponent } from './engagement-gallery.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule
  ],
  declarations: [EngagementGalleryComponent]
})
export class EngagementGalleryModule { }
