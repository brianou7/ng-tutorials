import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  private artist: any = {};

  private topTracks: any[] = [];

  private loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
      private spotify: SpotifyService) {

    this.loadingArtist = true;
      this.router.params.subscribe( args => {
        this.getArtist(args['id']);
        this.getTopTracks(args['id']);
      });

  }

  getArtist( id: string ): any {
    return this.spotify.getArtist(id)
      .subscribe( artist => {
        this.artist = artist;
        this.loadingArtist = false;
      });
  }

  getTopTracks( id: string ): any {
    return this.spotify.getTopTracks(id)
      .subscribe( topTracks => {
        this.topTracks = topTracks;
        console.log(topTracks);
      });
  }

}
