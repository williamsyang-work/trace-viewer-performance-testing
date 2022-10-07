import { browser, page } from './init.js';
import { debugLog, errorLog } from '../util/log.js'
import { wait } from '../util/wait.js';

export async function cleanup () {

    let task = "";

    try {
        debugLog(task = "Waiting for like 5 seconds i guess");
        await wait(5000);
        
        debugLog(task = 'Closing the browser');
        await browser.close();
    } catch (e) {
        errorLog('cleanup', task, e);
        return false;
    }
    return true;
}