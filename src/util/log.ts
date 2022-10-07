import * as ENV from './env.js';

let environment = ENV.get();

export const debugLog = (s: string) => {
    if (environment.debug) console.log(s);
}

export const errorLog = (fn: string, task: string, err: any) => {
    console.log(`Error in ${fn} @ "${task}"`);
    throw err;
}