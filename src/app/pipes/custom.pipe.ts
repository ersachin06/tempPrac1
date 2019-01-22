import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}


@Pipe(
  {name:'customjson',
    pure:false //now it is impure pipe
}
)
export class CustomJsonPipe implements PipeTransform
{
  transform(value:any):any
  {
    return JSON.stringify(value);//convert java script object into string.
  }

}

@Pipe
(
  {name:'filter'}
)
export class FilterPipe implements PipeTransform
{
  transform(items:any[], field: string, value:string):any[]
  {
    if(!items)
    {
      return [];
    }
    if(!field || ! value)
    {
      return items;
    }
    return items.filter(x=>x[field].toLowerCase().includes(value.toLowerCase()));
  }
}
