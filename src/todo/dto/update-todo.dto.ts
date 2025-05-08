import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiPropertyOptional({ example: 'Học Swagger', description: 'Tiêu đề mới' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'Cập nhật mô tả', description: 'Mô tả mới' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true, description: 'Cập nhật trạng thái hoàn thành' })
  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
