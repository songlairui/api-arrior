import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  //   create(@Res() res) {
  //     res.status(HttpStatus.CREATED).send();
  //   }
  @Get()
  //   findAll(@Res() res) {
  //     res.status(HttpStatus.OK).json([]);
  //   }
  async findAll(@Query() query): Promise<any[]> {
    return this.catsService.findAll();
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
