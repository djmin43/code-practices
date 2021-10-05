import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule, 
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(`mongodb+srv://jay:${process.env.DB_PASSWORD}@jaymin.jmuzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
