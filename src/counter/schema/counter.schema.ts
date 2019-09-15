import * as mongoose from 'mongoose';

export const CounterSchema = new mongoose.Schema({
    dateEntry: { type: Date, default: Date.now },
});
