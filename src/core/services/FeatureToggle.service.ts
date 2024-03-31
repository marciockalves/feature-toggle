import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatureToggleService {


  async exec(id:string): Promise<boolean> {


    return true;
  }
}
