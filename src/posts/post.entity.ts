import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postStatus } from './enums/postStatus.enum';
import { PostsController } from './posts.controller';
import { Tag } from 'src/tags/tag.entity';
import { PostMeta } from 'src/post-meta/post-meta.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  title!: string;
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  slug!: string;

  @Column({
    type: 'varchar',
    enum: postStatus,
    nullable: false,
  })
  status!: postStatus;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  content!: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  featureImgUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags?: Tag[];

  @OneToOne(() => PostMeta, (postMeta) => postMeta.post, {
    cascade: true,
    eager: true,
  })
  meta!: PostMeta;

  @ManyToOne(() => User, (user) => user.posts)
  author!: User;
}
