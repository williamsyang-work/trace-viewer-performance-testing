# trace-viewer-performance-testing

Two day proof of concept for automatic performance testing for the Theia-Trace-Extension.

## What it does
This is simply a function library for writing performance tests that are run through CLI commands.  It's exploratory in nature and can be changed liberally. 

Right now, it only logs performance timings of actions.  Future work is needed to compare these results and get a threshold for "Performance is too poor to submit this PR", or at least throw a warning.

![image](https://user-images.githubusercontent.com/98342456/195694035-6ce4e1f0-d939-4e2f-a00b-181e1def6fff.png)

## Run The Example
1) Start the theia-trace-extension browser and trace-compass-server (See [theia-trace-extension](https://github.com/eclipse-cdt-cloud/theia-trace-extension))
2) Open the browser example and open a trace.  Then close the browser.
	 - The test needs a trace already be open in order to work.  (Still in POC!)
	 - The code for selecting a trace is in `/src/tests/open-trace.ts` @ 53-61.  CSS Selector may need to be modified.

3) In the trace-viewer-performance-testing directory, run:
	 - `yarn` 
	 - `npx tsc` 
	 - `yarn start:debug`

## Making your own tests
This uses vanilla Puppeteer.js.  See documentation on how to use the [Puppeteer API.](https://pptr.dev/api/)

For the internal application, in `/src/tests/` create a new file `your-test.ts`.  You can reference `open-trace.ts` for an example of how the internal code should look.

Once you have your test written, import and add it into the `test()` function inside `src/process/run-tests.ts`.

## Deployment Exploration

Ideally, these tests will be run via Github Actions on incoming PR's to the master branch of Theia-Trace-Extension / [VScode-Trace-Extension](https://github.com/theia-ide/vscode-trace-extension/issues).

A dockerfile/docker image was successfully made that can run Puppeteer / Chromium.  This currently doesn't have access a way to access the code being tested.

Not sure if docker is needed, or if Theia-Trace-Extension has been successfully run in docker yet.

The code can be integrated into any codebase to directly have access, but I think its ugly.  See: [williamsyang-work/theia-trace-extension at performance-testing (github.com)](https://github.com/williamsyang-work/theia-trace-extension/tree/performance-testing).

## TO-DO
1) Ability to automatically launch and setup the source application
2) Ability to compare two branches performance
3) Enable tracing on performance tests and allow users to download results
4) Setup Github Actions
