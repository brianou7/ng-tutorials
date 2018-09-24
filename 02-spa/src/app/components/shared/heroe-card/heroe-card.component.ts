import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() private heroe: any = {};
  /*@Input() private index: number;

  @Output() heroeSelected: EventEmitter<number>; */

  constructor( private router: Router ) {
    /* this.heroeSelected = new EventEmitter(); */
  }

  ngOnInit() {
  }

  seeHeroe( originalIndex: number ) {
    /* this.heroeSelected.emit( this.index ); */
    this.router.navigate( ['heroes', 'heroe', originalIndex] );
  }

}
