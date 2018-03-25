import { Component, OnInit, Input } from '@angular/core';
import { Projekat } from '../../Projekat';
import { PlainGalleryConfig, Image } from 'angular-modal-gallery';
import { PlainGalleryStrategy } from 'angular-modal-gallery';
import { AdvancedLayout } from 'angular-modal-gallery';
import { LineLayout } from 'angular-modal-gallery';


@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {
  @Input() projekat;
  
  images;
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '100%', height: '80%' }, { length: 1, wrap: true }, 'flex-start'),
  };
  constructor() { }

  ngOnInit() {
    this.images = this.setImages();
  }

  setImages() {
      let images: Image[]= [];
      for(let i=0;i<this.projekat.files.length;i++){
        images.push(new Image(i,{
          img: this.projekat.files[i]
        }));
      }
      return images;
  }

}
