import dotenv from "dotenv";
dotenv.config();
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
  core: process.env.CORE_URL, // core-service (your real ERP backend)
  ai:   process.env.AI_URL, // ai-service   (your real aiChat)
};

// The axios call function: call another service and return its response.
export const axiosRequest = async (service, { method = 'GET', endpoint, data, headers = {} }) => {
  const baseURL = services[service];
  if (!baseURL) {
    // Without a baseURL, axios is handed a relative path (e.g. "/api/v1/...")
    // and throws a cryptic "Invalid URL". Fail with a clear message instead.
    throw new Error(
      `Missing base URL for service "${service}". Set ${
        service === 'core' ? 'CORE_URL' : service === 'ai' ? 'AI_URL' : service.toUpperCase() + '_URL'
      } in your .env file.`,
    );
  }
  const res = await axios({
    baseURL,
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
