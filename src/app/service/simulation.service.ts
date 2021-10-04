import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SimulationDetailsModel} from "../model/simulationDetails.model";
import {SimulationOpponentDetailsModel} from "../model/simulationOpponentDetails.model";
import {CharacterListItemModel} from "../model/characterListItem.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Applicant-Id' : 'gAHra2TrHNXA7LMX',
    'Application-Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2Rhc2Rhc2Rhc2Rhc2Rhc2QifQ.2cOfI5PKBkkYI8rFHyPhxgn9oPEXfoVPwO16_xfPQ6Y'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  darkSide: CharacterListItemModel;
  lightSide: CharacterListItemModel;

  constructor(private http: HttpClient) { }

  simulateFight(dark: CharacterListItemModel, light: CharacterListItemModel): Observable<any> {

    this.darkSide = dark;
    this.lightSide = light;

    let battle = {"dark": dark.id, "light": light.id};

    return this.http.post('https://developer.webstar.hu/rest/frontend-felveteli/simulate/', battle);
  }

}
