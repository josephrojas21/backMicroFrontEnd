import { Test, TestingModule } from '@nestjs/testing';
import { ApointmentsController } from './apointments.controller';

describe('Apointments Controller', () => {
  let controller: ApointmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApointmentsController],
    }).compile();

    controller = module.get<ApointmentsController>(ApointmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
