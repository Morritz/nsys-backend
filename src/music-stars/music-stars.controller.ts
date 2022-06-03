import {
  ArgumentMetadata,
  BadRequestException,
  Body,
  Controller,
  Get,
  PipeTransform,
  Post,
  UsePipes,
} from '@nestjs/common';
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
  @UsePipes(
    new (class implements PipeTransform {
      transform(value: any, metadata: ArgumentMetadata) {
        if (typeof value === 'object') {
          Object.keys(value).forEach((key) => {
            if (typeof value[key] === 'string') value[key] = value[key].trim();
          });
          return value;
        }
        throw new BadRequestException('Malformed body.');
      }
    })(),
  )
  addNewMusicStar(@Body() addMusicStarDto: AddMusicStarDto) {
    this.musicStarsService.addNewMusicStar(addMusicStarDto);
  }
}
