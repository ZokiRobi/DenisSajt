import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-biografija',
  templateUrl: './biografija.component.html',
  styleUrls: ['./biografija.component.css']
})
export class BiografijaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
        },6000);
      });
    });
  }
}
