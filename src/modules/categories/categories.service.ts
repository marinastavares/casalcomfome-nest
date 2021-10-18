import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringToSlug } from 'src/utils/helpers';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private citiesRepository: Repository<Category>,
  ) {}
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const newCategory = await this.citiesRepository.create({
      ...createCategoryInput,
      slug: stringToSlug(createCategoryInput.name),
    });
    return await this.citiesRepository.save(newCategory);
  }
  // async createMultiple(
  //   createCategoryInput: [CreateCategoryInput],
  // ): Promise<Category[]> {
  //   const categories = createCategoryInput.map((value) => ({
  //     ...value,
  //     slug: stringToSlug(value.name),
  //   }));
  //   const newCategory = await this.citiesRepository.create(categories);
  //   return await this.citiesRepository.save(newCategory);
  // }

  async findAll() {
    return await this.citiesRepository.find();
  }

  async findOne(slug: string): Promise<Category> {
    return await this.citiesRepository.findOne({ where: { slug } });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} Category`;
  }

  async remove(id: number): Promise<Category> {
    const newCategory = await this.citiesRepository.findOne(id);
    return await this.citiesRepository.remove(newCategory);
  }
}
