import {Component, OnInit} from '@angular/core';
import {CharacterListItemModel} from "../../model/characterListItem.model";
import {CharacterService} from "../../service/character.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: CharacterListItemModel[] = [];

  constructor(private characterService: CharacterService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      resp => {
        this.characters = resp;
      },
      err => {
        CharactersComponent.handleError(err);
      }
    );
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error({"error": "Nincs ApplicantId"});
    } else if (error.status === 405) {
      console.error({"error": "Method Not Allowed"});
    }
  }
}
