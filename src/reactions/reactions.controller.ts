import { Controller, Get, Param } from '@nestjs/common';
import { ReactionsService } from './reactions.service';

@Controller('reactions')
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @Get()
  findAll() {
    return this.reactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reactionsService.findOne(+id);
  }
}
