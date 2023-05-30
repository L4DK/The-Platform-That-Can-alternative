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
import { EnumAiGatekeeperAiStatus } from "./EnumAiGatekeeperAiStatus";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DigitalCustodianAgentListRelationFilter } from "../../digitalCustodianAgent/base/DigitalCustodianAgentListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

@InputType()
class AiGatekeeperWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumAiGatekeeperAiStatus,
  })
  @IsEnum(EnumAiGatekeeperAiStatus)
  @IsOptional()
  @Field(() => EnumAiGatekeeperAiStatus, {
    nullable: true,
  })
  AIStatus?:
    | "IDLE"
    | "THINKING"
    | "BREAK"
    | "CLEANING"
    | "TRAINING"
    | "FETCHING_DATA"
    | "DEBUGGING"
    | "ACTIVE"
    | "PROCESSING_IN_CLOUD"
    | "MANAGING_LARGE_DATA";

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  createdBy?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => DigitalCustodianAgentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DigitalCustodianAgentListRelationFilter)
  @IsOptional()
  @Field(() => DigitalCustodianAgentListRelationFilter, {
    nullable: true,
  })
  myAgents?: DigitalCustodianAgentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  roles?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  TasksCompleted?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { AiGatekeeperWhereInput as AiGatekeeperWhereInput };
