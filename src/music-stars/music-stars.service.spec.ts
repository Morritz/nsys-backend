import { Test, TestingModule } from '@nestjs/testing';
import { MusicStarsService } from './music-stars.service';

describe('MusicStarsService', () => {
  let service: MusicStarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicStarsService],
    }).compile();

    service = module.get<MusicStarsService>(MusicStarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
