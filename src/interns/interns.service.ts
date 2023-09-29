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
    return this.prisma.intern.findMany({
      include:{
        InternApplication: {
          select:{
            application: {
              select:{
                name: true
              }
            }
          }
        }
      }
    });
  }

  findOne(id: string) {
    return this.prisma.intern.findUnique({ where: { id } });
  }

  update(id: string, updateInternDto: UpdateInternDto) {
   return this.prisma.intern.update({ where: { id }, data: updateInternDto });
  }

  remove(id: string) {
    return this.prisma.intern.delete({ where: { id } });
  }
}
