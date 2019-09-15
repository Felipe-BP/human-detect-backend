import { Module } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CounterSchema } from './schema/counter.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Counter', schema: CounterSchema }])],
    providers: [CounterService],
    controllers: [CounterController],
    exports: [CounterService],
})
export class CounterModule {}
