import { Model } from 'sequelize-typescript';

export class BaseEntity extends Model {}

export abstract class BaseService<
  TEntity extends typeof BaseEntity,
  TGetDto extends {},
  TCreateDto extends {},
  TUpdateDto extends {},
> {
  constructor(private readonly entity: TEntity) {}

  async create(createDto: TCreateDto): Promise<TGetDto> {
    const result = await this.entity.create({ ...createDto });
    return result as unknown as TGetDto;
  }

  async get(id: string): Promise<TGetDto> {
    return this.entity.findByPk(id) as unknown as TGetDto;
  }

  async update(updateDto: TUpdateDto, id: string): Promise<TGetDto[]> {
    const result = await this.entity.update(
      { ...updateDto },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
    return result[1] as unknown as TGetDto[];
  }
}
