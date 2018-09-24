import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  private heroes: Heroe[];
  private text: string;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.text = params['text'];
      this.heroes = this._heroesService.searchHeroes(params['text']);
      console.log(this.heroes);
    });
  }

}
