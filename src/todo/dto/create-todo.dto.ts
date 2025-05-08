import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ example: 'Học NestJS', description: 'Tiêu đề công việc' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ example: 'Xem video hoặc đọc tài liệu', description: 'Mô tả chi tiết' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: false, description: 'Công việc đã hoàn thành hay chưa' })
  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
