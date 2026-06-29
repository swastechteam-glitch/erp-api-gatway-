import { axiosRequest } from '../common/axios/services.js';
import { buildHeaders } from '../common/apiRequestParams.js';

// Gateway controller for "yarn-bill-confirmation": forwards to the "core" service.
export const yarnBillConfirmation = async (req, res, next) => {
  try {
    const r = await axiosRequest('core', {
      method: req.method,
      // Forward the exact path + query string unchanged to the core service.
      endpoint: req.originalUrl,
      data: req.body,
      headers: buildHeaders(req),
    });
    res.status(r.status);
    if (r.headers['content-type']) res.set('content-type', r.headers['content-type']);
    res.send(Buffer.from(r.data));
  } catch (err) {
    next(err);
  }
};
