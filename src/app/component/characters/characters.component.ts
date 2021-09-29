import {Component, OnInit} from '@angular/core';
import {CharacterListItemModel} from "../../model/characterListItem.model";
import {CharacterService} from "../../service/character.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
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
        alt: 'Image 1',
      }, {
        src: '/assets/boba.png',
        alt: 'Image 2'
      }, {
        src: '/assets/grievous.png',
        alt: 'Image 3'
      }, {
        src: '/assets/kenobi.png',
        alt: 'Image 4'
      }, {
        src: '/assets/luke.png',
        alt: 'Image 5'
      }, {
        src: '/assets/maul.png',
        alt: 'Image 6'
      }, {
        src: '/assets/phasma.png',
        alt: 'Image 6'
      }, {
        src: '/assets/rey.png',
        alt: 'Image 6'
      }, {
        src: '/assets/solo.png',
        alt: 'Image 6'
      }, {
        src: '/assets/stormtrooper.png',
        alt: 'Image 6'
      }, {
        src: '/assets/vader.png',
        alt: 'Image 6'
      }, {
        src: '/assets/yoda.png',
        alt: 'Image 6'
      }
    ]

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
}
