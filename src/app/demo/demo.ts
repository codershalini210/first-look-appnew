import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  @Output() sendMessage = new EventEmitter<string>();
  SendToParent()
  {
    this.sendMessage.emit("Hello Parent")
  }
@Input() 
username:string=''
}
