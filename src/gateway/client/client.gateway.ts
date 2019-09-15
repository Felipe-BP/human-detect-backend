import { WebSocketGateway, OnGatewayConnection, SubscribeMessage } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { CounterService } from '../../counter/counter.service';
import { Client } from 'socket.io';

@WebSocketGateway()
export class ClientGateway implements OnGatewayConnection {
    constructor(private readonly counterService: CounterService) { }

    users: number = 0;

    handleConnection() {
        this.users++;
        Logger.log(`User connected: ${this.users}`, 'WebSocket');
    }

    @SubscribeMessage('entryPerson')
    addDocument(client: Client, data: any) {
        this.counterService.createModel(data);
    }
}
