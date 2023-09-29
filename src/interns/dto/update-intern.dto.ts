import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateInternDto } from './create-intern.dto';

export class UpdateInternDto extends PartialType(CreateInternDto) {
   @ApiProperty({readOnly : true})
  readonly  name: string;

  @ApiProperty({readOnly : true})
  readonly  email: string;

  @ApiProperty({readOnly : true})
  readonly  password: string;
}
