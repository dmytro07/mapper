import { Test, TestingModule } from '@nestjs/testing';
import { MapperProfileService } from './mapper-profile.service';

describe('MapperProfileService', () => {
  let service: MapperProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapperProfileService],
    }).compile();

    service = module.get<MapperProfileService>(MapperProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
