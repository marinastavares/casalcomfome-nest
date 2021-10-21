import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './modules/cities/cities.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RecommendationsModule } from './modules/recommendations/recommendations.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(),
    CitiesModule,
    CategoriesModule,
    RecommendationsModule,
    RestaurantsModule,
    PostsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
