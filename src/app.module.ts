import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientGatewayModule } from './gateway/client/client.gateway.module';

@Module({
  imports: [ClientGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
