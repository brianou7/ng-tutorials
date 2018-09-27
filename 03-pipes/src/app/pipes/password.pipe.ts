import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
    if (active) {
      let new_value = '';

      for (let i = 0; i < value.length; i++) {
        new_value += '*';
      }

      return new_value;
    }

    return value;
  }

}
