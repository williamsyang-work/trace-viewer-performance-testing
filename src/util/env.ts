
export const environment = {
    "debug": false,
    "headful": false,
    "tracing": false,
    "screenshots": false,
}

export const initEnvironment = () => {
    process.argv.forEach((input, i) => {
        if (i < 2) return;
    
        const arg = input.substring(1) as keyof typeof environment;
        if (environment[arg] === false) {
            environment[arg] = true;
        }
    });

    console.log(`Starting tests...\n\n`);
    if (environment.debug) {
        console.log(`Running test in debug mode:`);
        console.dir(environment);
    }
}


