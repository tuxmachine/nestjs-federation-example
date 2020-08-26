import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      authorId: 1,
      title: 'Hello world',
    },
  ];

  findOne(postId: number): Post {
    return this.posts.find(({ id }) => postId === id);
  }

  all(): Post[] {
    return [...this.posts];
  }

  forAuthor(userId: number): Post[] {
    return this.posts.filter(({ authorId }) => userId === authorId);
  }
}
