// made by tools/build.py: the emulator's parts (fm1.toml emu) and the app's own part of the page
import { compose } from "./parts/parts.js";
import * as data from "./parts/data.js";
const own = {};
export const { attach, message } = compose({ data }, own, { id: "slicebox", name: "SLICEBOX", backupExt: "bak" });
