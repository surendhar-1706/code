import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category {
  @Prop()
  name: string;
}
const CategorySchema = SchemaFactory.createForClass(Category);

export type PostDocument = Post & Document;

@Schema({
  timestamps: true,
})
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: '' })
  photo: string;

  @Prop({ required: true })
  username: string;

  @Prop({ type: CategorySchema })
  categories: Category[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
