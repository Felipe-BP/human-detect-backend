import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientGatewayModule } from './gateway/client/client.gateway.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CounterModule } from './counter/counter.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, { useNewUrlParser: true }),
    CounterModule,
    ClientGatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
