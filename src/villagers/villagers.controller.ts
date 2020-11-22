import { Controller, Get, Param, Query } from '@nestjs/common';
import { ListAllVillagers } from './dto/villager.dto';
import { Villager } from './villager.schema';
import { VillagersService } from './villagers.service';

@Controller('villagers')
export class VillagersController {
  constructor(private readonly villagerService: VillagersService) {}

  @Get()
  async findAll(): Promise<Villager[]> {
    return this.villagerService.findAll();
  }

  @Get('filter')
  async findMany(@Query() query: ListAllVillagers) {
    return await this.villagerService.findMany(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villagerService.findOne(id);
  }
}
