import { axiosRequest } from '../common/axios/services.js';
import { buildHeaders } from '../common/apiRequestParams.js';

// Gateway controller for "hrm": forwards to the "core" service via axiosRequest.
export const hrm = async (req, res, next) => {
  try {
    const r = await axiosRequest('core', {
      method: req.method,
      // req.originalUrl = the exact path the browser called, e.g.
      // "/api/v1/hrm/...?year=2026". We forward it unchanged so the
      // path AND query string reach the core service as-is.
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
