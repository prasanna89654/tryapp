import { ApiProperty } from '@nestjs/swagger';
import { Frameworks } from 'src/interns/dto/create-intern.dto';

export class CreateApplicationDto {
  @ApiProperty()
   name: string;

    @ApiProperty()
    framework: Frameworks[];

    @ApiProperty()
    intern : string[];
}



