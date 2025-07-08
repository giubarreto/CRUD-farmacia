import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_bem_estar',
      entities: [],
      synchronize: true,
      logging: true,
    }),
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
