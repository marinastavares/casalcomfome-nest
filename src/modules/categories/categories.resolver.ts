import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput')
    createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  // @Mutation(() => [Category])
  // createMultipleCategory(
  //   @Args('createMultipleCategory')
  //   createCategoryInput: [CreateCategoryInput],
  // ) {
  //   return this.categoriesService.createMultiple(createCategoryInput);
  // }

  @Query(() => [Category], { name: 'categories' })
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Query(() => Category, { name: 'categories' })
  findOne(
    @Args('slug', { type: () => String }) slug: string,
  ): Promise<Category> {
    return this.categoriesService.findOne(slug);
  }

  // @Mutation(() => Category)
  // updateCategory(
  //   @Args('updateCategoryInput')
  //   updateCategoryInput: UpdateCategoryInput,
  // ) {
  //   return this.categoriesService.update(updateCategoryInput.id, updateCategoryInput);
  // }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.remove(id);
  }
}
