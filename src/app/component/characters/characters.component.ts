import {Component, Input, OnInit} from '@angular/core';
import {CharacterListItemModel} from "../../model/characterListItem.model";
import {CharacterService} from "../../service/character.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  characters: CharacterListItemModel[] = [];
  showNavigationArrows = true;


  constructor(private characterService: CharacterService,
              private router: Router) {
  }

ngOnInit(): void {
  this.characterService.getCharacters().subscribe(
    resp => {
      this.characters = resp;

      for (let i = 0; i < this.characters.length; i++) {
        for (let j = 0; j < this.Images.length; j++) {

          if (this.characters[i].name === this.Images[j].alt) {
            this.characters[i].url = this.Images[j].src;
          }
        }
      }
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
}
