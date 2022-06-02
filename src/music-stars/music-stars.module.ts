import { Module } from '@nestjs/common';
import { MusicStarsController } from './music-stars.controller';
import { MusicStarsService } from './music-stars.service';

@Module({
  imports: [MusicStarsModule],
  controllers: [MusicStarsController],
  providers: [MusicStarsService],
})
export class MusicStarsModule {}
