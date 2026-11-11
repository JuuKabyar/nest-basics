import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

/**
 * DTO for full user Create.
 */
export class CreateUserDto {
    /**
     * The firstname of a user
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    firstname!: string;

    /**
     * The lastname of a user
     */
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(20)
    lastname?: string;

    /**
     * Email of a user
     */
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(20)
    email!: string;

    /**
     * Password of a user
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'}
    )
    password!: string;
}