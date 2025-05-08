import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('todos') // Tên nhóm hiển thị trong Swagger UI
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo một công việc mới' })
  @ApiBody({ type: CreateTodoDto })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách tất cả công việc' })
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết công việc theo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID công việc' })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Cập nhật công việc theo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID công việc' })
  @ApiBody({ type: UpdateTodoDto })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa công việc theo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID công việc' })
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
