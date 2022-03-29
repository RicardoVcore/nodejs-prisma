/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TaskUpdateManyWithoutLocationsInput } from "./TaskUpdateManyWithoutLocationsInput";
import { Type } from "class-transformer";
@InputType()
class LocationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutLocationsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutLocationsInput;
}
export { LocationUpdateInput };