import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Produtos } from './produtos/entities/produtos.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutosModule } from './produtos/produtos.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      entities: [Produtos,Categoria],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule,
    ProdutosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
