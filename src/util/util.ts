import readline from 'readline';

export const pause = (ms: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), ms));

export const log = (s: string, oneline?: boolean) => {
    process.stdout.write(`\n${s}`);
}

export const clearLine = () => {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
};