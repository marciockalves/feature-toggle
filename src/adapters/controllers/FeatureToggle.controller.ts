import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FeatureToggleService } from '../../core/services/FeatureToggle.service';
import { BlobOptions } from 'buffer';
import { UpdateFeatureToggleService } from 'src/core/services/UpdateFeatureToggle.services';
import { IRequestUpdateToggleDto } from 'src/core/infraestructure/IRequestUpdateToggle.dto';

@Controller()
export class FeatureToggleController {
  constructor(
    private readonly featureToggleService: FeatureToggleService,
    private readonly updateFeaturToggle: UpdateFeatureToggleService
    ) {}

  @Get('/:id')
 async getFeatureToggle(@Param() id:string): Promise<boolean> {
    return this.featureToggleService.exec(id);
  }

  @Put()
  async updateFeatureToggle(@Body() data:IRequestUpdateToggleDto): Promise<string>{
    await this.updateFeaturToggle.exec(data);

    return 'Success';
  }
}
