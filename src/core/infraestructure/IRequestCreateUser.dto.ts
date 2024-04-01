import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
export class IRequestCreateUSerDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name:string;

    @IsNotEmpty()
    @MaxLength(8)
    password:string;

    application:string

}