import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateUserFeatureToggleService{
    

    async exec(): Promise<void>{
        console.log('Service');
    }
}

