import { ApiProperty } from '@nestjs/swagger';

export class CreateInternDto {
  @ApiProperty()
readonly name: string;

    @ApiProperty()
readonly email: string;


@ApiProperty()
password: string;

    @ApiProperty()
 phone: string;

 @ApiProperty()
 address: string;

    @ApiProperty()
    worktype : WorkType;

    @ApiProperty()
    framework : Frameworks;

    @ApiProperty({ required: false })
    image: string;
}

enum WorkType {
    ONSITE = 'Onsite',
    REMOTE = 'Remote',
    HYBRID = 'Hybrid',
  }


  enum Frameworks {
    ANGULAR = 'Angular',
    FLUTTER = 'Flutter',
    REACT = 'React',
    NODEJS = 'Nodejs'
  }