import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UnifiedStageInput {
  @ApiProperty({ type: String, description: 'The name of the stage' })
  @IsString()
  stage_name: string;

  @ApiPropertyOptional({
    type: {},
    description:
      'The custom field mappings of the stage between the remote 3rd party & Panora',
  })
  @IsOptional()
  field_mappings?: Record<string, any>;
}

export class UnifiedStageOutput extends UnifiedStageInput {
  @ApiPropertyOptional({ type: String, description: 'The uuid of the stage' })
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'The id of the stage in the context of the Crm 3rd Party',
  })
  @IsString()
  @IsOptional()
  remote_id?: string;

  @ApiPropertyOptional({
    type: {},
    description:
      'The remote data of the stage in the context of the Crm 3rd Party',
  })
  @IsOptional()
  remote_data?: Record<string, any>;
}
