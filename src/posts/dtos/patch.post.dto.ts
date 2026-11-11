import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create.post.dto";
import { IsInt, IsNotEmpty } from "class-validator";

/**
 * Dto to update a post
 */
export class PatchPostDto extends PartialType(CreatePostDto){
    /**
     * Id to update a post
     */
    @ApiProperty({
        description : 'ID of the post that want to update.'
    })
    @IsInt()
    @IsNotEmpty()
    id!: number
}