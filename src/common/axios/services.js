import axios from 'axios';

// ──────────────────────────────────────────────────────────────────
// The services this gateway forwards to. These are the REAL URLs.
// core-service and ai-service run on the same server as the gateway,
// so they are reached on localhost. Change the host/port here if you
// ever move a service to another machine.
// (The public URL https://swasinfotechnologies.cloud/api/v1 is THIS
//  gateway — requests come in here and are forwarded below.)
// ──────────────────────────────────────────────────────────────────
const services = {
  core: 'http://localhost:8001', // core-service (your real ERP backend)
  ai:   'http://localhost:8002', // ai-service   (your real aiChat)
};

// The axios call function: call another service and return its response.
export const axiosRequest = async (service, { method = 'GET', endpoint, data, headers = {} }) => {
  const res = await axios({
    baseURL: services[service],
    method,
    url: endpoint,
    data: ['GET', 'HEAD'].includes((method || 'GET').toUpperCase()) ? undefined : data,
    headers,
    responseType: 'arraybuffer', // works for JSON and PDF/binary
    validateStatus: () => true,
    timeout: 60000,
  });
  return { status: res.status, data: res.data, headers: res.headers };
};
