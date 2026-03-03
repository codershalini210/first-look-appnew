import { Component } from '@angular/core';

@Component({
  selector: 'app-city-card',
  imports: [],
  templateUrl: './city-card.html',
  styleUrl: './city-card.css',
})
export class CityCard {
cityname:string="Edinburgh"
imgurl:String = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9SvbHWOCn_KnbSC10t-uO7vuTW04OSccVA&s"
citydes :String = "description'The capital city of Scotland...';"
citydetails:String ="'Famous for its castle, the Royal Mile, and the annual Fringe Festival.'"
}
