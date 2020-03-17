import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MovieController } from './movie.controller'
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    providers: [MovieService],
    controllers: [MovieController]
})
export class MovieModule {}
