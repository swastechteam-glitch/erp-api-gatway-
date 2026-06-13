import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json } = format;
export default createLogger({
  format: combine(timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }), json()),
  transports: [new transports.Console()],
});
