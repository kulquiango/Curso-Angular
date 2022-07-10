import { TemperatureEnum } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });
  it('Deberia retornar grados C si mando grados C', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,TemperatureEnum.C)).toEqual('12 °C');
  });

  it('Deberia retornar grados F si mando grados F', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,TemperatureEnum.F)).toEqual('53.60 °F');
  });
});
