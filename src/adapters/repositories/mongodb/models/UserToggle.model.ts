import {Prop, Schema,  SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserFeatureToggleEntity } from 'src/core/infraestructure/UserFeatureToggle.entity';


export type UserDocument = UserFeatureToggleEntity & Document;

@Schema({
    timestamps: { createdAt: 'created', updatedAt:'updated'},

})
export class UserToggleModel{
    @Prop({required: true})
    name: string;

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    application:string
}

export const UserToggleSchema = SchemaFactory.createForClass(UserToggleModel);
