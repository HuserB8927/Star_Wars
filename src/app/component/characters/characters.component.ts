import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CharacterListItemModel} from "../../model/characterListItem.model";
import {CharacterService} from "../../service/character.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

declare const $:any;


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {

  characters: CharacterListItemModel[] = [];


  constructor(private characterService: CharacterService,
              private router: Router) {
    this.characterService.getCharacters().subscribe(
      resp => {
        this.characters = resp;
      },
      err => {
        CharactersComponent.handleError(err);
      }
    );
  }

  ngOnInit(): void {
    $('#carouselExampleCaptions').carousel()
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
      alt: 'first',
    }, {
      src: '/assets/boba.png',
      alt: 'second'
    }, {
      src: '/assets/grievous.png',
      alt: 'third'
    }, {
      src: '/assets/kenobi.png',
      alt: 'fourth'
    }, {
      src: '/assets/luke.png',
      alt: 'sixth'
    }, {
      src: '/assets/maul.png',
      alt: 'seventh'
    }, {
      src: '/assets/phasma.png',
      alt: 'eighth'
    }, {
      src: '/assets/rey.png',
      alt: 'ninth'
    }, {
      src: '/assets/solo.png',
      alt: 'tenth'
    }, {
      src: '/assets/stormtrooper.png',
      alt: 'eleventh'
    }, {
      src: '/assets/vader.png',
      alt: 'twelve'
    }, {
      src: '/assets/yoda.png',
      alt: 'thirteenth'
    }
  ]
}
