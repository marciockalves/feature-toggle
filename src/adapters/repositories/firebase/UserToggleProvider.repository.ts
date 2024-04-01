import { Injectable } from "@nestjs/common";
import { IRepositoryMethods } from "src/core/infraestructure/IRepositoryMethods.interface";

@Injectable()
export class UserToggleProviderRepository implements IRepositoryMethods{

     async create(data: object, collection: string): Promise<string> {

        return '';
        
    }

     async find(id: string, collection: string): Promise<string | boolean> {
        return '';
    }

  async  update(id: string, activate:boolean, collection: string): Promise<string | boolean> {

    return true;
    }
    
}