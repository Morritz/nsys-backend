import {
  IsIn,
  IsInstance,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { Genre, genres } from '../entities/genre.entity';

export class AddMusicStarDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly Alias: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsIn(genres)
  readonly genre: Genre;
}
