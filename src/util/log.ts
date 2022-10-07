import { environment } from './env.js';

export const processLog = (process: string) => {
    if (!environment.debug) return;
    console.log(`Process: ${process}`);
}

export const taskLog = (task: string) => {
    if (!environment.debug) return;
    console.log(`    Task: ${task}`);
}

export const performanceLog = (dur: number) => {
    if (!environment.debug) return;
    console.log(`      Duration = ${dur.toFixed(2)} ms`);
}

export const errorLog = (fn: string, task: string, err: any) => {
    console.log(`Error in ${fn} @ "${task}"`);
    if (environment.debug) {
        console.trace(err);
    } else {
        throw err;
    }
}