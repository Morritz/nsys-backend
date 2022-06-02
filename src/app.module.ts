import { Module } from '@nestjs/common';
import { MusicStarsModule } from './music-stars/music-stars.module';

@Module({
  imports: [MusicStarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
