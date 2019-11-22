import { DeliveryCategoriesService } from './delivery-categories.service';
import { Controller, Get, Res, Post, Param, Req } from '@nestjs/common';
import { HttpStatus } from '../utils/HttpConstant'
import { Response } from "express";
import { Request } from 'express-serve-static-core';

@Controller('delivery-categories')
export class DeliveryCategoriesController {

    constructor(private readonly deliveryCategoriesService: DeliveryCategoriesService) {}

    @Get('/:id')
    async all(@Res() resp: Response, @Req() req: Request,@Param() params){

        try 
        {
            
            const data = await this.deliveryCategoriesService.all(params.id); 
            return resp.status(HttpStatus.OK).json({message: "OK", code: HttpStatus.OK, data: data}).send();
        } 
        catch (error) 
        {
            return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: "Error status no da", code: HttpStatus.OK, data: error}).send()
        }
    }

    @Get('/deliveryCategoriesById/:id')
    getdeliveryCategoriesById(@Param() params): Object{
        return this.deliveryCategoriesService.getdeliveryCategoriesById(params.id);
    }

    @Post('/saveApointment')
    async saveApointment(@Res() resp: Response, @Req() req: Request){

        try 
        {
            const data = await this.deliveryCategoriesService.saveApointment(req.body); 
            return resp.status(HttpStatus.OK).json({message: "OK", code: HttpStatus.OK, data: data}).send();
        } 
        catch (error) 
        {
            return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: "Error status no da", code: HttpStatus.OK, data: error}).send()
        }
    }

}
