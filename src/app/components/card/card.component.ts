import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //repasse das funcoes para os filhos
  @Input()
  gameCover: string = "";
  @Input()
  gameLabel: string=""
  @Input()
  gameType: string = "";
  @Input()
  gamePrice: string = "";

  constructor () {  }

  ngOnInit(): void {
    
  }
}
