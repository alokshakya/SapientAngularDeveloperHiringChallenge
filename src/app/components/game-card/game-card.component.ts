import { Component, OnInit, Input } from '@angular/core';
import { GameInterface } from '../../interfaces/game-interface';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor() { }
  @Input() game:GameInterface;
  ngOnInit(): void {
  }

}
