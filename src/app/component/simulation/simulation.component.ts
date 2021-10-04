import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SimulationService} from "../../service/simulation.service";


@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  opponents: string;
  opponentsArr: string[] = [];
 

  Images: Array<any> = [
    {
      src: "/assets/anakin.png",
      alt: 'anakin',
    }, {
      src: '/assets/boba.png',
      alt: 'boba'
    }, {
      src: '/assets/grievous.png',
      alt: 'grievous'
    }, {
      src: '/assets/kenobi.png',
      alt: 'kenobi'
    }, {
      src: '/assets/luke.png',
      alt: 'luke'
    }, {
      src: '/assets/maul.png',
      alt: 'maul'
    }, {
      src: '/assets/phasma.png',
      alt: 'phasma'
    }, {
      src: '/assets/rey.png',
      alt: 'rey'
    }, {
      src: '/assets/solo.png',
      alt: 'solo'
    }, {
      src: '/assets/stormtrooper.png',
      alt: 'stormtrooper'
    }, {
      src: '/assets/vader.png',
      alt: 'vader'
    }, {
      src: '/assets/yoda.png',
      alt: 'yoda'
    }
  ]

  constructor(private simulationService: SimulationService,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      (id) => {
        this.opponents = String(id.get('id'));
        this.opponentsArr = this.opponents.split("-");

      }
    )
  }



  ngOnInit(): void {



  }
}
