import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureEnum } from '../enums/temperature.enum';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, tipo: TemperatureEnum): string {
    const finalValue = tipo === TemperatureEnum.F ?((value * (9 / 5)) + 32).toFixed(2):value;
    return `${finalValue} °${tipo}`;
  }
}
