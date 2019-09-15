import { Module } from '@nestjs/common';
import { ClientGateway } from './client.gateway';
import { CounterModule } from '../../counter/counter.module';

@Module({
    imports: [CounterModule],
    providers: [ClientGateway],
})
export class ClientGatewayModule {}
