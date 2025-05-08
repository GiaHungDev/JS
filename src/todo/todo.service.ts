import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) // Inject Todo repository
    private todoRepository: Repository<Todo>, // Inject TodoRepository
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }


  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }


  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo với ID ${id} không tồn tại.`);
    }
    return todo;
  }


  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id); 
    const updatedTodo = await this.todoRepository.save({ ...todo, ...updateTodoDto }); 
    return updatedTodo;
  }


  async remove(id: number): Promise<void> {
    const todo = await this.findOne(id); 
    await this.todoRepository.delete(id); 
  }
}
