import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApplicationService {
  constructor(private readonly prisma: PrismaService) {}
 async create(createApplicationDto: CreateApplicationDto) {
  const result =await this.prisma.applications.create({
     data: {
      name: createApplicationDto.name,
     }
    });

   

    createApplicationDto.framework.forEach(async (framework) => {
         await this.prisma.applicationFramework.create({
        data: {
          name: framework,
          application: {
            connect: {
              id: result.id,
            },
          },
        },
      });
    });

    createApplicationDto.intern.forEach(async (intern) => {
      await this.prisma.internApplication.create({
     data: {
       intern: {
          connect: {
            id: intern,
          },
       },
       application: {
         connect: {
           id: result.id,
         },
       },
     },
   });
 });
      

    return ({
      message: 'Sucess',
    })
  }

  async findAll() {
    const result = await  this.prisma.applications.findMany(
     {
      include:{
        ApplicationFramework: {
          select:{
            name: true
          }
        },
        InternApplication:{
          select:{
            intern:{
              select:{
                name: true
              }
            }
          }
        }
      }
     }
    );
   
    return result;
  }

  findOne(id: string) {
    return this.prisma.applications.findUnique({ where: { id } });
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    return this.prisma.intern.update({ where: { id }, data: UpdateApplicationDto });
  }

  remove(id: string) {
    return this.prisma.applications.delete({ where: { id } });
  }
}
