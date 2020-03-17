import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud'

import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Crud({
    model: {
        type: Movie
    }
})

@Controller('movie')
export class MovieController {
    constructor(public service: MovieService) {}
}
