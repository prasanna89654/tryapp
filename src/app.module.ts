import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InternsModule } from './interns/interns.module';
import { ApplicationModule } from './application/application.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [PrismaModule, InternsModule, ApplicationModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
