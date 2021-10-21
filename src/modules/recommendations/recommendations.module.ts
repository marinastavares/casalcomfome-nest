import { Module } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { RecommendationsResolver } from './recommendations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recommendation } from './entities/recommendation.entity';
import { CategoriesModule } from '../categories/categories.module';
import { CitiesModule } from '../cities/cities.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recommendation]),
    CategoriesModule,
    CitiesModule,
  ],
  providers: [RecommendationsResolver, RecommendationsService],
})
export class RecommendationsModule {}
