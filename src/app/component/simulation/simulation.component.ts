import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SimulationService} from "../../service/simulation.service";
import {CharacterService} from "../../service/character.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  opponents: string;
  fighters: string;


  constructor(private simulationService: SimulationService,
              private route: ActivatedRoute,
              private characterService: CharacterService) {

    this.route.paramMap.subscribe(
      (simulationId) => {
        this.opponents = String(simulationId.get('simulationId'));

        /*for (let i = 0; i < this.Images.length - 1; i++) {
          for (let j = 0; j < this.fighters.length - 1; j++) {

            if (this.Images[i].alt === this.opponentsArr[0]) {
              this.fighters[j].dark = this.Images[i].src;
            }
            if (this.Images[i + 1].alt === this.opponentsArr[1]) {
              this.fighters[j + 1].dark = this.Images[i + 1].src;
            }
          }
        }*/
      }
    )
  }


  ngOnInit(): void {

    this.characterService.receiveOpponents().subscribe(
      (subj) => {
        this.fighters = subj;
        console.log(this.fighters);
      }
    );

  }
}
