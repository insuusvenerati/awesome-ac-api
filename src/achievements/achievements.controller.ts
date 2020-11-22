import { Controller, Get, Param } from '@nestjs/common';
import { AchievementsService } from './achievements.service';

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  findAll() {
    return this.achievementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementsService.findOne(+id);
  }
}
