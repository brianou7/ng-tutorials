import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private router: Router,
               private _heroesService: HeroesService ) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  /* seeHeroe( index: number ) {
    this.router.navigate( ['heroes', 'heroe', index] );
  } */

}
