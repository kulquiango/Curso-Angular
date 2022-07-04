import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkMode'
})
export class DarkModePipe implements PipeTransform {
  transform(value: boolean) {

    return value?"bg-dark text-white":"bg-light text-dark";
  }
}
