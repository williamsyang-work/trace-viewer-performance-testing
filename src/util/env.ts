
const environment = {
    "debug": false,
    "headful": false,
    "tracing": false,
    "screenshots": false,
}

export const set = () => {
    process.argv.forEach((input, i) => {
        if (i < 2) return;
    
        const arg = input.substring(1) as keyof typeof environment;
        if (environment[arg] === false) {
            environment[arg] = true;
        }
    });

    if (environment.debug) {
        console.log(`Running test in debug mode..`);
        console.dir(environment);
    }
}

export const get = () => environment;
