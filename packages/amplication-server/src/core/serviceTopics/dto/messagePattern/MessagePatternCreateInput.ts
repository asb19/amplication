import { Field, InputType } from '@nestjs/graphql';
import { EnumMessagePatternConnectionOptions } from '@amplication/code-gen-types';

@InputType()
export class MessagePatternCreateInput {
  @Field(() => String, { nullable: false })
  topicId!: string;

  @Field(() => EnumMessagePatternConnectionOptions, { nullable: false })
  type!: keyof typeof EnumMessagePatternConnectionOptions;
}
