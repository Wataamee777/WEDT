import { createUI } from "./src/ui.js";
import { hookConsole } from "./src/logger.js";
import { hookErrors } from "./src/error.js";
import { createRunner } from "./src/console.js";

export function startWEDT(){

 const ui = createUI();

 hookConsole(ui);
 hookErrors(ui);

 const run = createRunner(ui);

 ui.setRunner(run);

}
