import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  firstname!: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  lastname!: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  password!: string;

  @OneToMany(() => Post, (post) => post.author)
  posts!: Post[];
}
