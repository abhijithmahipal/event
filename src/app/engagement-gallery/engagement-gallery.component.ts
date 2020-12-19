import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
@Component({
  selector: 'app-engagement-gallery',
  templateUrl: './engagement-gallery.component.html',
  styleUrls: ['./engagement-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EngagementGalleryComponent implements OnInit {

  items: GalleryItem[] = [];

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    const pathToAsset = '../../assets/engagement-album/';
    for(let i=1; i<=25; i++){
      this.items.push(new ImageItem({ src: pathToAsset+i+'.jpg', thumb: pathToAsset+i+'.jpg' }));
    }
  }
}
