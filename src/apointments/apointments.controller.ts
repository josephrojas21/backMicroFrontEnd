
import { ApointmentsService } from './apointments.service';
import { Controller, Get, Res, Post, Param, Req } from '@nestjs/common';
import { HttpStatus } from '../utils/HttpConstant'
import { Response } from "express";
import { Request } from 'express-serve-static-core';

@Controller('apointments')
export class ApointmentsController {

    constructor(private readonly apointmentsService: ApointmentsService) {}
    @Get('/:id')
    async all(@Res() resp: Response,@Param() params){

        try 
        {
            const data = await this.apointmentsService.all(params.id); 
            return resp.status(HttpStatus.OK).json({message: "OK", code: HttpStatus.OK, data: data}).send();
        } 
        catch (error) 
        {
            return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: "Error status no da", code: HttpStatus.OK, data: error}).send()
        }
    }

    @Get('/detailsApointments/:id')
    getdeliveryCategoriesById(@Param() params): Object{
        return this.apointmentsService.getDetailsApoinments(params.id);
    }

    @Post('/updatesApointment')
    async updatesApointment(@Res() resp: Response, @Req() req: Request){

        try 
        {
            const data = await this.apointmentsService.updatesApointment(req.body); 
            return resp.status(HttpStatus.OK).json({message: "OK", code: HttpStatus.OK, data: data}).send();
        } 
        catch (error) 
        {
            return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: "Error status no da", code: HttpStatus.OK, data: error}).send()
        }
    }

    @Post('/deleteApointment')
    async deleteApointment(@Res() resp: Response, @Req() req: Request){

        try 
        {
            const data = await this.apointmentsService.deleteApointment(req.body); 
            return resp.status(HttpStatus.OK).json({message: "OK", code: HttpStatus.OK, data: data}).send();
        } 
        catch (error) 
        {
            return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: "Error status no da", code: HttpStatus.OK, data: error}).send()
        }
    }

}
