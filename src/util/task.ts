import { wait } from './wait.js';
import { environment } from './env.js';
import { page } from './browser.js';
import { taskLog, processLog, errorLog, performanceLog } from './log.js';


let process = "";
export const setProcess = (s: string) => {
    processLog(s);
    process = s;
}

export const task = async (log: string, fn: () => Promise<void>, pause: number = 50) => {
    taskLog(log);
    try {
        await fn();
        await wait(pause);
    } catch (e) {
        errorLog(process, log, e);
    }
}

export const performanceTask = async (log: string, fn: () => Promise<void>, pause: number = 50) => {
    
    taskLog(log);
    let startTime, endTime, duration;
    try {
        startTime = performance.now();
        await fn();
        endTime = performance.now();
        duration = endTime - startTime;
        performanceLog(duration);
        await wait(pause);
    } catch (e) {
        errorLog(process, log, e);
    }
}