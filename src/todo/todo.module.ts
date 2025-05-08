import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';
import { TodoRepository } from './todo.repository'; // import repository

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoRepository])], 
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
