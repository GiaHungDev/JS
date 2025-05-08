import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'Hung1810', 
      database: 'todo_list', 
      entities: [__dirname + '/todo/entities/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
