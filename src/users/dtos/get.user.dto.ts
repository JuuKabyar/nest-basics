import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty,  } from "class-validator";

/**
 * DTO for full user Get (Get).
 */
export class GetUserDto{
    /**
   * The unique numeric ID of the user
   */
    @ApiProperty({
        description: "Get user info with specific id",
        example: 123
    })
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    id!: number;
}