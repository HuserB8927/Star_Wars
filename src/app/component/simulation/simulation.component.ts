import {Component, OnInit} from '@angular/core';
import {SimulationService} from "../../service/simulation.service";
import {CharacterListItemModel} from "../../model/characterListItem.model";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {


  characterHP: number;
  darkSide: CharacterListItemModel;
  lightSide: CharacterListItemModel;
  winner: CharacterListItemModel;
  checkIfCharactersAlive = true;
  fighters: string[] = [];


  constructor(private simulationService: SimulationService) {

    this.darkSide = this.simulationService.darkSide;
  }


  ngOnInit(): void {

  }

  async startFight() {

    await new Promise(resolve => setTimeout(resolve, 2000));

    while (this.checkIfCharactersAlive) {

      this.startRound();

      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  startRound() {

    let attacker = this.decideAttacker();
    let defender = '';

  }

  decideAttacker() {

    let dark = this.darkSide.name;
    let light = this.lightSide.name;

    this.fighters.push(dark);
    this.fighters.push(light);

    let select = Math.floor(Math.random() * this.fighters.length);

    return this.fighters[select];
  }
}
