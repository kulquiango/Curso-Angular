import { DarkModePipe } from './dark-mode.pipe';

describe('DarkModePipe', () => {
  it('debe retornar dark mode si es true', () => {
    const pipe = new DarkModePipe();
    expect(pipe.transform(true)).toEqual('bg-dark text-white');
  });

  it('debe retornar dark mode si es false', () => {
    const pipe = new DarkModePipe();
    expect(pipe.transform(false)).toEqual('bg-light text-dark');
  });
});
