import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'figurineTypeColor'
})
export class FigurineTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Allien':
        color = 'green lighten-1';
        break;
      case 'Beast':
        color = 'brown lighten-3';
        break;
      case 'Cyborg':
        color = 'grey lighten-1';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Human':
        color = 'deep-orange lighten-3';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;
  }
}
