import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString: string, prodName:string):any[] {
    const result: any=[];
    if(!value || filterString==='' || prodName===''){
      return value;
    }
    value.forEach((a: any)=>{
      if(a[prodName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
