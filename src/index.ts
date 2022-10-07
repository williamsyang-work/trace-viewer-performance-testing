import init from './process/init.js';
import cleanup from './process/cleanup.js';
import test from "./process/run-tests.js";

(async () => {
    await init('http://localhost:3000/');
    await test();
    await cleanup();
})();
