export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 204,
}

export interface HttpResponse {
  statusCode: HttpStatusCode
  body?: any
}
