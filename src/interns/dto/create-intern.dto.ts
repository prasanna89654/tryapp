import { ApiProperty } from '@nestjs/swagger';

export class CreateInternDto {
  @ApiProperty()
   name: string;

  @ApiProperty()
   email: string;

  @ApiProperty()
   password: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  worktype: WorkType;

  @ApiProperty()
  framework: Frameworks;

  @ApiProperty({ required: false })
  image?: string;
}

export enum WorkType {
  ONSITE = 'Onsite',
  REMOTE = 'Remote',
  HYBRID = 'Hybrid',
}

export enum Frameworks {
  ANGULAR = 'Angular',
  FLUTTER = 'Flutter',
  REACT = 'React',
  NODEJS = 'Nodejs',
}
