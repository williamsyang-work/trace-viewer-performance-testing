import * as ENV from './util/env.js';
import { init } from './process/init.js';
import { cleanup } from './process/cleanup.js';
import test from "./process/run-tests.js";

ENV.set();
await init('http://localhost:3000/#/repo/eyanwil/Traces');
await test();
await cleanup();
