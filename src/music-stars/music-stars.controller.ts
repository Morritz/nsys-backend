import { Controller, Get, Post } from '@nestjs/common';
import { MusicStarsService } from './music-stars.service';

@Controller('music-stars')
export class MusicStarsController {
  constructor(private musicStarsService: MusicStarsService) {}
  @Get()
  getAllMusicStars() {
    return this.musicStarsService.getAllMusicStars();
  }

  @Post()
  addNewMusicStar() {
    this.musicStarsService.addNewMusicStar();
  }
}
