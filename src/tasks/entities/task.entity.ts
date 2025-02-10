import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, type: [String] })
  tags: string[];

  @Prop({
    required: true,
    type: String,
    default: 'pending',
    options: ['pending', 'completed', 'in progress', 'canceled'],
  })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
