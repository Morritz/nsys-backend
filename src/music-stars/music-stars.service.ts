import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFileSync } from 'fs';
import { AddMusicStarDto } from './dto/add-music-star.dto';
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

  addNewMusicStar(addMusicStarDto: AddMusicStarDto) {
    return this.musicStars.push(addMusicStarDto);
  }

  findMusicStarsByAlias(alias: string) {
    return this.musicStars.filter((val) => {
      if (val.Alias.startsWith(alias)) return val;
    });
  }
}
