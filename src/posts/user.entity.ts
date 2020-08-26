import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(type => ID)
  @Directive('@external')
  public id: number;

  @Field(type => [Post])
  public posts?: Post[];

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}