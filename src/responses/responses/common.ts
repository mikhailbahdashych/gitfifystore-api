import { ResponsePayload } from '../../interfaces/objects/ResponsePayload';

export class CommonResponses {
  public unauthorized(data: ResponsePayload) {
    const { res } = data;

    return res.status(401).json({
      status: 401,
      message: 'unauthorized'
    });
  }

  public somethingWentWrong(data: ResponsePayload) {
    const { res } = data;

    return res.status(500).json({
      status: 500,
      message: 'something-went-wrong'
    });
  }

  public accessForbidden(data: ResponsePayload) {
    const { res } = data;

    return res.status(403).json({
      status: 403,
      message: 'access-forbidden'
    });
  }
}
