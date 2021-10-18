import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './modules/cities/cities.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RecommendationsModule } from './modules/recommendations/recommendations.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(),
    CitiesModule,
    CategoriesModule,
    RecommendationsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
