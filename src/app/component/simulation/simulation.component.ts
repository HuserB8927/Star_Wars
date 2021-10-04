import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SimulationService} from "../../service/simulation.service";
import {CharacterService} from "../../service/character.service";
import {FormGroup} from "@angular/forms";
import {SimulationDetailsModel} from "../../model/simulationDetails.model";
import {CharacterListItemModel} from "../../model/characterListItem.model";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  opponents: string;
  fighters: string;

  darkSide: CharacterListItemModel;
  lightSide: SimulationDetailsModel;


  constructor(private simulationService: SimulationService,
              private route: ActivatedRoute,
              private characterService: CharacterService) {

    this.darkSide = this.simulationService.darkSide;
  }


  ngOnInit(): void {

    this.characterService.receiveOpponents().subscribe(
      (subj) => {
        this.fighters = subj;
        console.log(this.fighters );
      }
    );

  }
}
