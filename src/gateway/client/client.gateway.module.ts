import { Module } from '@nestjs/common';
import { ClientGateway } from './client.gateway';

@Module({
    providers: [ClientGateway],
})
export class ClientGatewayModule {}
