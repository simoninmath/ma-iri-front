import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'figurineTypeColor'
})
export class FigurineTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
  
    switch (type) {
      case 'Default':
        color = 'red lighten-1';
        break;
      case 'Mech':
        color = 'blue lighten-1';
        break;
      case 'Allien':
        color = 'green lighten-2';
        break;
      case 'Beast':
        color = 'brown lighten-3';
        break;
      case 'Cyborg':
        color = 'grey lighten-1';
        break;
      case 'Aerial':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Spector':
        color = 'pink lighten-4';
        break;
      case 'Psycho':
        color = 'deep-purple darken-2';
        break;
      case 'Droid':
        color = 'lime accent-5';
        break;
      case 'Human':
        color = 'deep-orange lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'new badge ' + color;
  }
}
