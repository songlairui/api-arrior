import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'this action adds a new cat';
  }
  @Get()
  async findAll(@Query() query): Promise<any[]> {
    return [];
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return `this action return a #${id} cat`;
  }
  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto: CreateCatDto) {
    return `this action updates a #${id} cat`;
  }
  @Delete(':id"')
  remove(@Param('id') id) {
    return `this action removes a #${id} cat`;
  }
}
