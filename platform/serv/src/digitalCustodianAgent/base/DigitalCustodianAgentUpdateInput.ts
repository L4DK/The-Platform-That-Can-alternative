/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumDigitalCustodianAgentAgentStatus } from "./EnumDigitalCustodianAgentAgentStatus";
import {
  IsEnum,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { AiGatekeeperWhereUniqueInput } from "../../aiGatekeeper/base/AiGatekeeperWhereUniqueInput";

@InputType()
class DigitalCustodianAgentUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumDigitalCustodianAgentAgentStatus,
  })
  @IsEnum(EnumDigitalCustodianAgentAgentStatus)
  @IsOptional()
  @Field(() => EnumDigitalCustodianAgentAgentStatus, {
    nullable: true,
  })
  agentStatus?:
    | "IDLE"
    | "WORKING"
    | "LEARNING"
    | "BREAK"
    | "FETCHING_DATA"
    | "PROCESSING_DATA"
    | "DEBUGGING"
    | "OBSERVING"
    | "TRAINING"
    | "HELPING";

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastActiveTime?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastError?: string | null;

  @ApiProperty({
    required: false,
    type: () => AiGatekeeperWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiGatekeeperWhereUniqueInput)
  @IsOptional()
  @Field(() => AiGatekeeperWhereUniqueInput, {
    nullable: true,
  })
  MyAiGatekeeper?: AiGatekeeperWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  tasksCompleted?: number;
}

export { DigitalCustodianAgentUpdateInput as DigitalCustodianAgentUpdateInput };