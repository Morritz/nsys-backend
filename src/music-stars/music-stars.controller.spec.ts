import { Test, TestingModule } from '@nestjs/testing';
import { MusicStarsController } from './music-stars.controller';

describe('MusicStarsController', () => {
  let controller: MusicStarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicStarsController],
    }).compile();

    controller = module.get<MusicStarsController>(MusicStarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
