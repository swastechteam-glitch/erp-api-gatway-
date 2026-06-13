// Picks the headers the gateway forwards to the services.
export const buildHeaders = (req) => {
  const headers = { 'content-type': req.headers['content-type'] || 'application/json' };
  if (req.headers['subdbname']) headers['subdbname'] = req.headers['subdbname'];
  if (req.headers['authorization']) headers['authorization'] = req.headers['authorization'];
  return headers;
};
