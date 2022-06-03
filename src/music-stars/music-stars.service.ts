import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { AddMusicStarDto } from './dto/add-music-star.dto';
import { MusicStar } from './entities/music-star.entity';

@Injectable()
export class MusicStarsService implements OnModuleInit {
  private musicStars: MusicStar[];

  private saveMusicStarsToFile() {
    try {
      writeFileSync(
        './data/musicStars.json',
        JSON.stringify(this.musicStars),
        'utf-8',
      );
    } catch (e) {
      console.error(e);
    }
  }

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
    this.musicStars.push(addMusicStarDto);
    this.saveMusicStarsToFile();
  }

  findMusicStarsByAlias(alias: string) {
    return this.musicStars.filter((val) => {
      if (val.Alias.startsWith(alias)) return val;
    });
  }
}
