import { Module } from "@nestjs/common";
import { CategoriaModule } from "../categoria/categoria.module";
import { ProdutosController } from "./controller/produtos.controller";
import { ProdutosService } from "./services/produtos.services";
import { Produtos } from "./entities/produtos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule
    .forFeature([Produtos]),
    CategoriaModule
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}