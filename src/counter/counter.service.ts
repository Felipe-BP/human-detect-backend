import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export interface Counter {
    dateCounter: Date;
}

@Injectable()
export class CounterService {
    constructor(@InjectModel('Counter') private readonly counterModel: Model<Counter>) {}

    async createModel(counterObj): Promise<Counter> {
        const counterToSave = await this.counterModel(counterObj);
        return await counterToSave.save();
    }
}
