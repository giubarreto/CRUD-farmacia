import { Module } from "@nestjs/common";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaController } from "./controller/categoria.controller";
import { CategoriaService } from "./services/categoria.services";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria]),
  ],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports: [CategoriaService],
  })
export class CategoriaModule {}