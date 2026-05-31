import { createRequestHandler } from "@vercel/remix/server";
import * as build from "../build/index.js";

export default createRequestHandler({ build });
