import { Component } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})

  export class CalciComponent {
Input='0'
currvalue=''
writeToinput(value:String)
{
    this.currvalue=this.currvalue+value;
    this.Input=this.currvalue;}
    equals() {
        this.Input  =eval(this.currvalue);
        this.currvalue=this.Input   
    }
      
    clear(){
        this.currvalue='';
        this.Input='0';
    }
    
  backspace() {
    this.currvalue = this.currvalue.slice(0, -1);
    this.Input = this.currvalue;
  }

  }