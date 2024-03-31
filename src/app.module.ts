import { Module } from '@nestjs/common';
import { FeatureToggleController } from '../src/adapters/controllers/FeatureToggle.controller';
import { FeatureToggleService } from './core/services/FeatureToggle.service';

@Module({
  imports: [],
  controllers: [FeatureToggleController],
  providers: [FeatureToggleService],
})
export class AppModule {}
