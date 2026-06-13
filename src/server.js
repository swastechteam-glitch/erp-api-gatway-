import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import appRoutes from "./routes/index.js";
import logger from "./helpers/logger.js";
import { handleError } from "./errorhandler/errorHandler.js";
import http from "http";

const app = express();
const allowedOrigins = [
  "https://sasm.swasinfotechnologies.cloud",
  "https://kpf.swasinfotechnologies.cloud",
  "https://kas.swasinfotechnologies.cloud",
  "https://tpn.swasinfotechnologies.cloud",
  "https://gomathiamman.swasinfotechnologies.cloud",
  "https://kpt.swasinfotechnologies.cloud",
  "https://vindhya.swasinfotechnologies.cloud",
  "https://swasinfotechnologies.cloud",
  "https://lp3vbxbr-3000.inc1.devtunnels.ms",
  // "http://localhost:3000",
  "http://localhost:3001",
  "http://192.168.1.12:3000",
  // "http://192.168.1.5:3000",F
  // "http://localhost:8001",
  // "http://localhost:8002",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) callback(null, true);
      else {
        console.log("❌ BLOCKED ORIGIN:", origin);
        return callback(null, false);
      }
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "subdbname"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// --------------------------------------------------------
// HTTP & Socket.IO
// const httpServer = http.createServer(app);
// export const io = new SocketIO(httpServer, {
//   cors: { origin: "*", methods: ["GET", "POST"], credentials: true },
// });

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});
app.get("/health", (req, res) =>
  res.json({ service: "gateway", status: "ok" }),
);
app.use("/api/v1", appRoutes());
app.use(handleError);
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () =>
  logger.info(`Gateway on http://0.0.0.0:${PORT}`),
);
