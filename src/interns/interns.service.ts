import { Injectable } from '@nestjs/common';
import { CreateInternDto } from './dto/create-intern.dto';
import { UpdateInternDto } from './dto/update-intern.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class InternsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createInternDto: CreateInternDto) {
    return this.prisma.intern.create({ data: createInternDto });
  }

  findAll() {
    return this.prisma.intern.findMany();
  }

  findOne(id: string) {
    return this.prisma.intern.findUnique({ where: { id } });
  }

  update(id: number, updateInternDto: UpdateInternDto) {
    return `This action updates a #${id} intern`;
  }

  remove(id: number) {
    return `This action removes a #${id} intern`;
  }
}
