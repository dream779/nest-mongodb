import { Controller, Get } from '@nestjs/common';
import { MongoDBService } from './mongodb.service';

@Controller('mongodb')
export class MongodbController {
  constructor(private readonly mongodbService: MongoDBService) {
    this.mongodbService.connect();
  }

  @Get()
  async getHello() {
    return this.mongodbService.connect();
  }

  @Get('insert')
  async insertData() {
    return this.mongodbService.insertData();
  }

  @Get('get')
  async getData() {
    return this.mongodbService.getData();
  }

  @Get('delete')
  async deleteData() {
    return this.mongodbService.deleteData();
  }

  @Get('update')
  async updateData() {
    return this.mongodbService.updateData();
  }
}
