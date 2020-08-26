import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { User } from './user.entity';

@Resolver(of => Post)
export class PostsResolvers {
  constructor(private readonly postsService: PostsService) {}

  @Query(returns => Post)
  public findPost(@Args('id') id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query(returns => [Post])
  public getPosts(): Post[] {
    return this.postsService.all();
  }

  @ResolveField(of => User)
  public user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}