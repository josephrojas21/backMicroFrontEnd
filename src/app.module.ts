import { DeliveryCategoriesModule } from './delivery-categories/delivery-categories.module';
import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';
import { ApointmentsModule } from './apointments/apointments.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [HttpModule, ConfigModule, CustomLoggerModule,DeliveryCategoriesModule, ApointmentsModule, ReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
