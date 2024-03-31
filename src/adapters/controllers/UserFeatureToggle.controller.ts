import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserFeatureToggleService } from "src/core/services/CreateUserFeatureToggle.service";

@Controller()
export class UserFeatureToggleController{

    constructor(private readonly createUserFeatureToggle: CreateUserFeatureToggleService){}

    @Post()
   async createUser(@Body() request): Promise<void>{

        await this.createUserFeatureToggle.exec();
   }


   
}
