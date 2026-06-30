import { axiosRequest } from '../common/axios/services.js';
import { buildHeaders } from '../common/apiRequestParams.js';

// Gateway controller for "role-access": forwards every role-access request
// (my-menus, roles, menus, role-menus, users, user-role, user-menus) to the
// core service unchanged. Core's authenticate middleware decodes the JWT to a
// userId and runs the requireSuperAdmin guard, so the gateway just relays the
// call — same pattern as badge.controller.js.
export const roleAccessForward = async (req, res, next) => {
  try {
    const r = await axiosRequest('core', {
      method: req.method,
      // req.originalUrl = the exact path the browser called (path + query),
      // e.g. "/api/v1/role-access/role-menus/3". Forwarded unchanged.
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
