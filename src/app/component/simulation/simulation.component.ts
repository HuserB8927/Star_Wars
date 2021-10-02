import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SimulationService} from "../../service/simulation.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  constructor(private simulationService: SimulationService,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      (id) => {
        console.log(id)
      }
    )
  }

  ngOnInit(): void {

  }
}
