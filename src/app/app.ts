import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import {CityCard} from "./city-card/city-card"
import { GreetingCard } from './greeting-card/greeting-card';
import { CommonModule } from '@angular/common';
import { Demo } from './demo/demo';
interface people{
  name:string;
  city:string;
}
@Component({
  selector: 'app-root',
  imports: [Demo,RouterOutlet,UserProfile,CityCard,GreetingCard,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message=''
  receiveMessage(data:string){
    this.message = data
  }
  username ="ROn"
  people: people[] = [
    { name: 'Harry', city: 'London' },
     { name: 'Beth', city: 'Bristol' },
     {name:'JOhn',city:'London'},
    ];
  protected readonly title = signal('first-look-app');
}
