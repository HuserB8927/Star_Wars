import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginInputCommandsModel} from "../model/loginInputCommands.model";
import {catchError} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Content-Encoding': 'gzip',
    'Applicant-Id': 'gAHra2TrHNXA7LMX'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(data: LoginInputCommandsModel): Observable<LoginInputCommandsModel> {

    return this.http.post<LoginInputCommandsModel>("https://developer.webstar.hu/rest/frontend-felveteli/authentication/",
      data,
      httpOptions);
  }
}
