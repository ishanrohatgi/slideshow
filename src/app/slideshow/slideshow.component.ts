import { Component, HostListener, Input } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  @Input() imageList : { url: string}[]= [];
  imageUrl: string = '';
  imageIndex = 0;
  imageInterval: any;
  displayWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.displayWidth = window.innerWidth;
  }

  setImagInterval(){
    if(this.imageInterval){
      clearInterval(this.imageInterval);
    }
      this.imageInterval = setInterval(()=>{
        this.next()
      },5000);
  }
  ngOnInit(){
    console.log(this.imageList);
    this.imageUrl = this.imageList[this.imageIndex].url;
    console.log(this.imageUrl);
    this.setImagInterval();
    
  }

  next(){
    if(this.imageIndex <this.imageList.length-1){
      this.imageIndex = this.imageIndex+1;
      this.imageUrl = this.imageList[this.imageIndex].url;
    }else{
     this.imageIndex = 0;
     this.imageUrl = this.imageList[this.imageIndex].url;
    }
    this.setImagInterval();
  }

  prev(){
    if(this.imageIndex > 0){
      this.imageIndex = this.imageIndex-1;
      this.imageUrl = this.imageList[this.imageIndex].url;
    }else{
     this.imageIndex = this.imageList.length-1;
     this.imageUrl = this.imageList[this.imageIndex].url;
    }
    this.setImagInterval();
  }

  imageChangeViaDots(index:number){
    if(index<this.imageList.length){
      this.imageIndex = index;
      this.imageUrl = this.imageList[this.imageIndex].url;
      this.setImagInterval();
    }
  }
}
