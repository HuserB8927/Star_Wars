import {Component, OnInit} from '@angular/core';
import {CharacterListItemModel} from "../../model/characterListItem.model";
import {CharacterService} from "../../service/character.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {SimulationService} from "../../service/simulation.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {SimulationDetailsModel} from "../../model/simulationDetails.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  characters: CharacterListItemModel[] = [];
  charactersToFight: string[] = [];
  opponents: FormGroup;


  constructor(private characterService: CharacterService,
              private router: Router,
              private simulationService: SimulationService,
              private formBuilder: FormBuilder) {

    this.characterService.getCharacters().subscribe(
      resp => {
        this.characters = resp.characters;

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

  ngOnInit(): void {

  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error({"error": "Nincs ApplicantId"});
    } else if (error.status === 405) {
      console.error({"error": "Method Not Allowed"});
    } else if (error.status === 500) {
      console.log("error: Azonos oldalon álló karakterek nem küzdenek egymással.")
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

  userIndex: number = 0;

  decreaseIndex() {
    if (this.userIndex - 1 < 0) {
      this.userIndex = this.Images.length - 1;
    } else {
      this.userIndex -= 1;
    }
  }

  increaseIndex() {
    if (this.userIndex + 1 > this.Images.length - 1) {
      this.userIndex = 0;
    } else {
      this.userIndex += 1;
    }

  }

  choseCharacter(id: string) {


    this.charactersToFight.push(id);
    console.log(id)

    if (this.charactersToFight.length > 2) {
      alert("You can chose only two characters");
    } else {
      for (let i = 0; i < this.charactersToFight.length - 1; i++) {
        let sideOne = this.findCharacterById(this.charactersToFight[i]);
        let sideTwo = this.findCharacterById(this.charactersToFight[i + 1]);
        if (sideOne === sideTwo) {
          console.error("Same sides can not fight with each other")
          this.charactersToFight.splice(1, 1);
        } else {

          this.opponents = this.formBuilder.group({
            dark: [this.charactersToFight[0],],
            light: [this.charactersToFight[1]]
          });
        }
      }
    }
  }

  findCharacterById(id: string): any {

    for (let i = 0; i < this.characters.length; i++) {

      if (this.characters[i].id === id) {

        return this.characters[i].side;
      }
    }
  }


  goToFight() {

    this.characterService.sendOpponents(this.charactersToFight);

    this.simulationService.simulateFight(this.opponents.value).subscribe(
      resp => {
        this.router.navigate(['/simulation' + '/' + resp.simulationId + '/']);
      },
      err => {
        CharactersComponent.handleError(err);
      }
    )
  }
}
