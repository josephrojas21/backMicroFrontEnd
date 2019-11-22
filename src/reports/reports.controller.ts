
import { ReportsService } from './reports.service';
import { Controller, Get, Res, Post, Param } from '@nestjs/common';
import { HttpStatus } from '../utils/HttpConstant'
import { Response } from "express";

@Controller('reports')
export class ReportsController {

    constructor(private readonly reportsService: ReportsService) {}
    @Get('/:id')
    async all(@Res() resp: Response, @Param() params){

        try 
        {
            const data = await this.reportsService.all(params.id); 
            return resp.status(HttpStatus.OK).json({message: "OK", code: HttpStatus.OK, data: data}).send();
        } 
        catch (error) 
        {
            return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: "Error status no da", code: HttpStatus.OK, data: error}).send()
        }
    }


}
