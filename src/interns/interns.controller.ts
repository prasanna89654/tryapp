import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { InternsService } from './interns.service';
import { CreateInternDto } from './dto/create-intern.dto';
import { UpdateInternDto } from './dto/update-intern.dto';

@Controller('interns')
export class InternsController {
  constructor(private readonly internsService: InternsService) {}

  @Post()
  create(@Body() createInternDto: CreateInternDto) {
    return this.internsService.create(createInternDto);
  }

  @Get()
  findAll() {
    return this.internsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const intern = await this.internsService.findOne(id);
    if (!intern) {
      throw new NotFoundException(`Intern doesn't exist`);
    }
    return intern;
    
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternDto: UpdateInternDto) {
    return this.internsService.update(id, updateInternDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internsService.remove(id);
  }
}
