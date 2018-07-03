import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateEthereumAddress'
})
export class TruncateEthereumAddressPipe implements PipeTransform {

  transform(value: string): string {
    const head = value.substring(0, 10);
    const tail = value.slice(-10);
    return `${head}...${tail}`;
  }

}
