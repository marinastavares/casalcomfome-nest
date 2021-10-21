import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CategoriesModule } from '../categories/categories.module';
import { CitiesModule } from '../cities/cities.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
    CategoriesModule,
    CitiesModule,
  ],
  providers: [RestaurantsResolver, RestaurantsService],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
