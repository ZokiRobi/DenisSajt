import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Route, NavigationStart } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  private wowSubscription: Subscription;
  private elements = [];
  constructor(private wowService:NgwWowService, private router: Router) {
      this.router.events.filter( event => event instanceof NavigationEnd).subscribe(event => {
        this.wowService.init();
      });
   }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        this.elements.push(item);
      });

      window.onscroll = () => {
        var d = document.documentElement;
        var offset = d.scrollTop + window.innerHeight;
        var height = d.offsetHeight;
      
        if (offset === height) {
        }
      }
  }
  ngAfterViewInit(){
  }

  ngOnDestroy(): void {
    this.wowSubscription.unsubscribe();
  }
  
  
  resetAnimation(){
    this.wowService.init();
  }

}
