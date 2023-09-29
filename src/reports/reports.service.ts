import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}
 

  findAll() {
    return this.prisma.applicationFramework.groupBy({
      by: ['name'],
      _count: true,
      

    });

      
  }
}
