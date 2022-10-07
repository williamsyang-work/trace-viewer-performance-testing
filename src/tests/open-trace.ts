import { page } from "../util/browser.js";
import { task, setProcess, performanceTask } from "../util/task.js";

export default async function openTrace() {

    setProcess("Open Trace")

    await task(
        "Clicking left panel Trace-Viewer button",
        async () => {
            const TraceViewerLeftPanelButtonSelector = ".theia-app-left > ul:nth-child(1) > li:nth-child(6) > div:nth-child(1) > div:nth-child(1)";
            await page.$(TraceViewerLeftPanelButtonSelector);
            await page.click(TraceViewerLeftPanelButtonSelector);
        },
        1000
    );

    
    
    await task(
        "Clicking 'many-threads' trace",
        async () => {
            const Target = "#trace-explorer-opened-traces-widget > div:nth-child(1) > div > div > div:nth-child(1) > div";
            await page.$(Target);
            await page.click(Target);
        }
    );

    await performanceTask(
        "Opening the 'Resources Status' view",
        async () => {
            const ResourceStatusButton = "#outputs-list-container-11";
            await page.$(ResourceStatusButton);
            await page.click(ResourceStatusButton);
            
            const Canvas = "#main-timegraph-content"
            await page.waitForSelector(Canvas, { visible: true });
        }
    )
    // Leave like this for now.
    return;

    await task(
        "Clicking 'Open Trace' button",
        async () => {
            const OpenTraceButton = ".theia-button";
            await page.$(OpenTraceButton);
            await page.click(OpenTraceButton);
        },
        250
    );

    await task(
        "Clicking 'Many-Threads' directory",
        async () => {
            const ManyThreadsButton = ".theia-FileDialog > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2)";
            await page.$(ManyThreadsButton);
            await page.click(ManyThreadsButton);
        },
        500
    );

    await task(
        "Clicking 'Open Button'",
        async () => {
            const OpenButton = "button.theia-button:nth-child(3)";
            await page.$(OpenButton);
            await page.click(OpenButton);
        }
    );

}