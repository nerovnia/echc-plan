import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { ApiService } from './api.service';
import { Response } from 'express';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getReferencesBooks(@Res() response: Response) {
    response.status(HttpStatus.OK).json(this.apiService.getReferenceBooks());
  }
}
