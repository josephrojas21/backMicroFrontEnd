import { Module } from '@nestjs/common';
import { ApointmentsController } from './apointments.controller';
import { ApointmentsService } from './apointments.service';

@Module({
  controllers: [ApointmentsController],
  providers: [ApointmentsService]
})
export class ApointmentsModule {}
