import { ChartsModule } from './chart.module';

describe('ChartModule', () => {
  let chartModule: ChartsModule;

  beforeEach(() => {
    chartModule = new ChartsModule();
  });

  it('should create an instance', () => {
    expect(chartModule).toBeTruthy();
  });
});
