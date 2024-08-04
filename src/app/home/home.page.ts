import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// ตัวแปร รับค่าจาก input
  weight ? : number;
  hight ? : number;
  
  // ตัวแปร แสดงผลลัพธ์
  resault ? : number;
  resault_text ? : string ="";
  
  
  constructor() {}

  oncal(){
    console.log("w : " + this.weight)
    console.log("h : " + this.hight)
    if(this.weight == undefined  || this.hight == undefined){
   alert("กรุณา กรอกข้อมูลให้ครบถ้วน"); 
    return;
  }
    var hi = this.hight / 100;
this.resault = this.weight /(hi * hi);
console.log ("ผลลัพธ์" +  this.resault)

if(this.resault < 18.5){
   console.log("ผอมเกินไป");
   this.resault_text = "ผอมเกินไป"
}else if (this.resault >= 18.6  && this.resault <=24){
   console.log("น้ำหนักปกติเหมาะสม");
   this.resault_text = "น้ำหนักปกติเหมาะสม"
} else if(this.resault >= 25 && this.resault <=29.9){
  console.log("อ้วน");
  this.resault_text = "อ้วน"
}else{
  console.log("อ้วนมาก");
  this.resault_text = "อ้วนมาก"
}



  }

}
