import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalized'
})

export class CapitalizedPipe implements PipeTransform {

    transform(value: any, all: boolean = true): any {
        value = value.toLowerCase();
        let names = value.split(' ');

        if (all) {
            for (let index in names) {
                names[index] = names[index][0].toUpperCase() + names[index].substr(1);
            }
        } else {
            names[0] = names[0][0].toUpperCase() + names[0].substr(1);
        }

        return names.join(' ');
    }

}
