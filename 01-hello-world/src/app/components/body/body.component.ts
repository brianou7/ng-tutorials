import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    show = true;
    phrase: any = {
        text: 'With great power comes great responsability',
        author: 'Ben Parker'
    };

    characters: String[] = [
        'Spiderman', 'Venon', 'Dr. Octopus'
    ];
}
