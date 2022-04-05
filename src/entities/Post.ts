import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
  [OptionalProps]?: "title";
  @PrimaryKey()
  id!: number;

  @Property({ type: "date", default: "NOW()" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updateAt = new Date();

  @Property({ type: "text" })
  title!: string;
}
