import { Projekat } from './../Projekat';
import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild, HostListener } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Attribute } from '@angular/compiler';
import * as $ from 'jquery';
@Component({
  selector: 'app-projekti',
  templateUrl: './projekti.component.html',
  styleUrls: ['./projekti.component.css']
})
export class ProjektiComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('btntop') btntop: ElementRef;
  status;
  fileReader;
  projekti;
  constructor(private http: Http, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  setClass(i) {
    this.status = i;
  }
  getCurrentOffsetTop(element: ElementRef) {
    const rect = element.nativeElement.getBoundingClientRect();
    return rect.top + window.pageYOffset - document.documentElement.clientTop;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.getCurrentOffsetTop(this.btntop) > 600)
      $('#btntop').show();

    if(this.getCurrentOffsetTop(this.btntop) < 1000)
      $('#btntop').hide();

  }

  ngOnInit() {
    var request = new XMLHttpRequest();
    request.open("GET", "../../assets/test.json", false);
    request.send(null)
    this.projekti = JSON.parse(request.responseText);

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
