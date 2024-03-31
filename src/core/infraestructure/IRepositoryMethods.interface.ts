export interface IRepositoryMethods{
     create(data:object, collection: string) : Promise<string>;
     find(id:string, collection:string): Promise<string | boolean>;
     update(id:string, activate:boolean, collection:string): Promise<string | boolean>;
}