import { SwiperModule } from './swiper.module';

describe('SwiperModule', () => {
  let swiperModule: SwiperModule;

  beforeEach(() => {
    swiperModule = new SwiperModule();
  });

  it('should create an instance', () => {
    expect(swiperModule).toBeTruthy();
  });
});
