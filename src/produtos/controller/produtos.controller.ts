import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { Produtos } from '../entities/produtos.entity';
import { ProdutosService } from '../services/produtos.services';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByAllNome(@Param('nome') nome: string): Promise<Produtos[]> {
    return this.produtosService.findAllByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produtos: Produtos): Promise<Produtos> {
    return this.produtosService.create(produtos);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produtos: Produtos): Promise<Produtos> {
    return this.produtosService.update(produtos);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.delete(id);
  }
}
