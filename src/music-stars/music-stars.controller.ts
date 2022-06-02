import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddMusicStarDto } from './dto/add-music-star.dto';
import { MusicStarsService } from './music-stars.service';

@Controller('music-stars')
export class MusicStarsController {
  constructor(private musicStarsService: MusicStarsService) {}
  @Get()
  getAllMusicStars() {
    return this.musicStarsService.getAllMusicStars();
  }

  @Post()
  addNewMusicStar(@Body() addMusicStarDto: AddMusicStarDto) {
    this.musicStarsService.addNewMusicStar(addMusicStarDto);
  }
}
