import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbController } from './mongodb/mongodb.controller';
import { MongoDBService } from './mongodb/mongodb.service';

@Module({
  imports: [],
  controllers: [AppController, MongodbController],
  providers: [AppService, MongoDBService],
})
export class AppModule { }
