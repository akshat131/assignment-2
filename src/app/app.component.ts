import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {




  display= "block";
   dis =false;
  clickv='fa fa-bars';
onclick()
{
    if (this.clickv=='fa fa-bars')
        this.clickv='fa fa-times';
    else
    this.clickv='fa fa-bars';

    if (this.dis==true)
        this.dis= false;
    else
      this.dis=true;

      
}

      status: boolean = false;
      clickEvent(){
        this.status = !this.status;
      }

      public disp = {
        "homepage": !(this.dis),
        "disappear": this.dis

      }

  
  menuOpen=0;img0=0;img1=0;img2=0;
   
 
   
   constructor() {
    }
 
   ngOnInit(): void {
     
   
 
 }
 
 
 Img0() {
   
   this.img0=1;this.img1=0;this.img2=0;
 
   document.getElementById("img0").style.width="52%";
   document.getElementById("img1").style.width="0";
   document.getElementById("img2").style.width="0";
 
 }
 
 Img1() {
   
   this.img0=0;this.img1=1;this.img2=0;
 
   document.getElementById("img0").style.width="0";
   document.getElementById("img1").style.width="52%";
   document.getElementById("img2").style.width="0";
   
 }
 
Img2() {
   
   
   this.img0=0;this.img1=0;this.img2=1;
 
   document.getElementById("img0").style.width="0";
   document.getElementById("img1").style.width="0";
   document.getElementById("img2").style.width="52%";
 
 }
 
 
 }
 