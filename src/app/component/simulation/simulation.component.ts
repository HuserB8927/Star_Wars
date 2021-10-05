import {Component, OnInit} from '@angular/core';
import {SimulationService} from "../../service/simulation.service";
import {CharacterListItemModel} from "../../model/characterListItem.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {


  darkSideHP: number = 100;
  lightSideHP: number = 100;
  darkSide: CharacterListItemModel;
  lightSide: CharacterListItemModel;
  winner: CharacterListItemModel;
  checkIfCharactersAlive = true;
  fighters: CharacterListItemModel[] = [];
  winnerText: string = 'A csata nyertese';
  winnerCharacterName: string;


  darkSideName: string;
  lightSideName: string;
  firstAttacker: CharacterListItemModel;


  constructor(private simulationService: SimulationService,
              private router: Router) {

    this.darkSide = this.simulationService.darkSide;
    this.lightSide = this.simulationService.lightSide;

  }


  ngOnInit(): void {

    let replace = /<br>/gi;
    this.darkSideName = this.darkSide.name.replace(replace, ' ');
    this.lightSideName = this.lightSide.name.replace(replace, ' ');


    this.startFight().then(() =>
      this.winnerCharacterName = this.winner.name.replace(replace, ' '));

  }

  async startFight() {

    await new Promise(resolve => setTimeout(resolve, 1500));

    while (this.checkIfCharactersAlive) {

      this.startRound();

      await new Promise(resolve => setTimeout(resolve, 1500));

    }
    if (!this.checkIfCharactersAlive) {
      if (this.darkSideHP <= 0) {
        this.winner = this.lightSide;
      } else {
        this.winner = this.darkSide;
      }
    }
  }

  startRound() {

    let firstAttacker = this.decideAttacker();
    let defender;

    if (firstAttacker.side === 'dark') {
      defender = this.lightSide;
    } else if (firstAttacker.side === 'light') {
      defender = this.darkSide
    }

    let damage = Math.floor(Math.random() * 15);

    this.takeHit(firstAttacker, defender, damage);

  }

  takeHit(firstAttacker: CharacterListItemModel, defender: CharacterListItemModel, damage: number) {


    if (firstAttacker.side === 'DARK') {
      this.lightSideHP = this.lightSideHP - damage;

      if (this.lightSideHP < 0) {
        this.checkIfCharactersAlive = false;

      }
    } else if (firstAttacker.side === 'LIGHT') {
      this.darkSideHP = this.darkSideHP - damage;

      if (this.darkSideHP < 0) {
        this.checkIfCharactersAlive = false;
      }
    }
  }


  decideAttacker(): CharacterListItemModel {

    let dark = this.darkSide;
    let light = this.lightSide;

    this.fighters.push(dark);
    this.fighters.push(light);

    let select = Math.floor(Math.random() * this.fighters.length);

    this.firstAttacker = this.fighters[select];

    return this.firstAttacker;
  }

  backToTheShip() {
    this.router.navigate(['/characters']);
  }
}
