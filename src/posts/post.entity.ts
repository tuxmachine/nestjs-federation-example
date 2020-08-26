import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(type => ID)
  public id: number;

  @Field()
  public title: string;

  @Field(type => Int)
  public authorId: number;

  @Field(type => User)
  public user?: User;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}