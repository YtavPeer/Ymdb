import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMoviePipes'
})
export class SearchMoviePipesPipe implements PipeTransform {

  transform(value: Array<any>, args?: string): Array<any> {

    let arrAfter: Array<any>=[];

    for (let i = 0; i < value.length; i++) {

      if (value[i].Movie_Name.indexOf(args) > -1)
      {
        arrAfter.push(value[i]);
      }

    }

    return  arrAfter;
  }

}
