import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFileSync } from 'fs';
import { MusicStar } from './entities/music-star.entity';

@Injectable()
export class MusicStarsService implements OnModuleInit {
  private musicStars: MusicStar[];

  onModuleInit() {
    try {
      const data = readFileSync('./data/musicStars.json', 'utf-8');
      const parsedData = JSON.parse(data);
      this.musicStars = parsedData;
    } catch (e) {
      console.log(e);
      this.musicStars = [];
    }
  }

  getAllMusicStars() {
    return this.musicStars;
  }
  addNewMusicStar() {
    return;
  }
}
