import { Injectable } from "@nestjs/common";
import { IRequestUpdateToggleDto } from "../infraestructure/IRequestUpdateToggle.dto";
import { MongoDbProviderRepository } from "src/adapters/repositories/MongoDbProvider.repository";

@Injectable()
export class UpdateFeatureToggleService{

    constructor(private readonly mongoDbProviderRepository: MongoDbProviderRepository){}

    async exec(data:IRequestUpdateToggleDto): Promise<void>{

          await  this.mongoDbProviderRepository.update(data.id,data.activate,'featureToggle');
    }
}