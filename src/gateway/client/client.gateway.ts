import { WebSocketGateway, OnGatewayConnection } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class ClientGateway implements OnGatewayConnection {
    users: number = 0;

    handleConnection() {
        this.users++;
        Logger.log(`User connected: ${this.users}`, 'WebSocket');
    }
}
