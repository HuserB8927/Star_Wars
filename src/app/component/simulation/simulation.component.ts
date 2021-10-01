import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SimulationService} from "../../service/simulation.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  constructor(private router: Router,
              private simulationService: SimulationService) {
  }

  ngOnInit(): void {

    this.simulation();

  }

  simulation() {

    this.simulationService.simulateFight().subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        SimulationComponent.handleError(err);
      }
    );
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error({"error": "Nincs ApplicantId"});
    } else if (error.status === 405) {
      console.error({"error": "Method Not Allowed"});
    } else if (error.status === 500) {
      console.error({"error": "Azonos oldalon álló karakterek nem küzdenek egymással."});
    }
  }
}
