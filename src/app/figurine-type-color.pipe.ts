import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'figurineTypeColor'
})
export class FigurineTypeColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
