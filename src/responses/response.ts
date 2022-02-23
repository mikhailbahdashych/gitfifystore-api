import { CommonResponses } from './responses/common';


class Response {
  public common: CommonResponses;

  constructor() {
    this.common = new CommonResponses();
  }
}

export const CommonResponse = new Response();
