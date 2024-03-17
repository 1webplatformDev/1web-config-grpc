export const SQL_SERVICE_NAME = "SqlService";

export enum SQL_LIST_METHOD {
  FUNCTION_RUN = "functionRun",
}

export interface FunctionRunReturnRb {
  name: string;
}

export interface FunctionRunParamsRb {
  name: string;
}

export interface SqlServiceClient {
  functionRun(params: FunctionRunParamsRb): FunctionRunReturnRb;
}
