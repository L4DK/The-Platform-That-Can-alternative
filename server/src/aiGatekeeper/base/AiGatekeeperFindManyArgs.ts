/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiGatekeeperWhereInput } from "./AiGatekeeperWhereInput";
import { Type } from "class-transformer";
import { AiGatekeeperOrderByInput } from "./AiGatekeeperOrderByInput";

@ArgsType()
class AiGatekeeperFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AiGatekeeperWhereInput,
  })
  @Field(() => AiGatekeeperWhereInput, { nullable: true })
  @Type(() => AiGatekeeperWhereInput)
  where?: AiGatekeeperWhereInput;

  @ApiProperty({
    required: false,
    type: [AiGatekeeperOrderByInput],
  })
  @Field(() => [AiGatekeeperOrderByInput], { nullable: true })
  @Type(() => AiGatekeeperOrderByInput)
  orderBy?: Array<AiGatekeeperOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AiGatekeeperFindManyArgs as AiGatekeeperFindManyArgs };