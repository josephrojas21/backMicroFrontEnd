import { Module } from '@nestjs/common';
import { DeliveryCategoriesController } from './delivery-categories.controller';
import { DeliveryCategoriesService } from './delivery-categories.service';

@Module({
  controllers: [DeliveryCategoriesController],
  providers: [DeliveryCategoriesService]
})
export class DeliveryCategoriesModule {}
