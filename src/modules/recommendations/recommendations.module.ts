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

// import { Module } from '@nestjs/common';
// import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
// import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

// import { Recommendation } from './entities/recommendation.entity';
// import { RecommendationDTO } from './dto/recommendation.dto';
// import { CreateRecommendationInput } from './dto/create-recommendation.input';
// import { UpdateRecommendationInput } from './dto/update-recommendation.input';

// @Module({
//   imports: [
//     NestjsQueryGraphQLModule.forFeature({
//       // import the NestjsQueryTypeOrmModule to register the entity with typeorm
//       // and provide a QueryService
//       imports: [NestjsQueryTypeOrmModule.forFeature([Recommendation])],
//       // describe the resolvers you want to expose
//       resolvers: [
//         {
//           DTOClass: RecommendationDTO,
//           EntityClass: Recommendation,
//           CreateDTOClass: CreateRecommendationInput,
//           UpdateDTOClass: UpdateRecommendationInput,
//           enableTotalCount: true,
//         },
//       ],
//     }),
//   ],
//   providers: [],
// })
// export class CategoriesModule {}
