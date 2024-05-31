import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryParams } from './classes';
import { ApiQuery } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/bugged')
  getHelloBugged(@Query() queryParams: QueryParams): string {
    console.log(queryParams);
    return this.appService.getHello();
  }

  @Get('/duplicated')
  @ApiQuery({
    type: QueryParams,
  })
  getDuplicated(@Query() queryParams: QueryParams): string {
    console.log(queryParams);
    return this.appService.getHello();
  }

  @Get('/correct')
  @ApiQuery({
    type: QueryParams,
  })
  getCorrectlyGenerated(): string {
    return this.appService.getHello();
  }
}
