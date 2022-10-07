import { browser } from '../util/browser.js';
import { environment } from '../util/env.js';
import { task, setProcess } from '../util/task.js';

export default async function cleanup () {

    if (!environment.debug) {
    
        setProcess("Cleanup");

        await task(
            "Closing the page",
            async () => {
                await browser.close();
            }
        )
    }

}