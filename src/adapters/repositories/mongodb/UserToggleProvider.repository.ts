import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IRepositoryMethods } from "src/core/infraestructure/IRepositoryMethods.interface";
import { UserFeatureToggleEntity } from "src/core/infraestructure/UserFeatureToggle.entity";
import { UserDocument } from "./models/UserToggle.model";
import { IRequestCreateUSerDto } from "src/core/infraestructure/IRequestCreateUser.dto";

@Injectable()
export class UserToggleProviderRepository implements IRepositoryMethods{

    constructor(@InjectModel(UserFeatureToggleEntity.name) private readonly userToggleModel:Model<UserDocument>){}

     async create(data: IRequestCreateUSerDto): Promise<UserDocument> {

        return '';
        
    }

     async find(id: string, collection: string): Promise<string | boolean> {
        return '';
    }

  async  update(id: string, activate:boolean, collection: string): Promise<string | boolean> {

    return true;
    }
    
}