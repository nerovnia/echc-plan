import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

//import { databaseProviders } from './database.providers';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';


//import { AppDatabase } from './ database.providers';
//import { RouterModule } from '@nestjs/core';
//import { ApiModule } from './api.module';


@Module({
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: process.env.STORAGE,
      autoLoadModels: true,
      logging: (...msg) => console.log(msg),
    }),
  ],
})
export class AppModule {}
