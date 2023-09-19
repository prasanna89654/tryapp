import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InternsModule } from './interns/interns.module';

@Module({
  imports: [PrismaModule, InternsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
