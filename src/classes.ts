import { ApiProperty } from '@nestjs/swagger';

export class QueryParamsSubObject {
  @ApiProperty()
  subObjectStringParam: string;
}

export class NestedQueryParamsSubOject {
  @ApiProperty({ type: QueryParamsSubObject })
  subObject: QueryParamsSubObject;
}

export class QueryParams {
  @ApiProperty()
  stringParam: string;

  @ApiProperty({ type: QueryParamsSubObject })
  subObject: QueryParamsSubObject;

  @ApiProperty({ type: NestedQueryParamsSubOject })
  nestedSubObject: NestedQueryParamsSubOject;
}
