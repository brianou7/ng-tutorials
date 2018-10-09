import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {}

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCIXx_XdOpkg2liHb23EfpRQISKYXalCvpy6dVoey5hOIMnpp1qU9hKP4QNUhROcJkfApcZtgYsuEaIJQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));
  }

  getArtists( term: string ): any {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
      .pipe(map( data => data['artists'].items ));
  }

  getArtist( id: string ): any {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map( data => data['tracks']));
  }
}
