import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Filtro'
})
export class Filtro implements PipeTransform {

    transform(value: any, args?: any): any {
        if (args === '' || args.length < 3) return value;
        const result = [];
        for (const item of value) {
            if (item.title.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                result.push(item);
            }
        }
        return result;
    }

}
