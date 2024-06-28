import * as p from "@clack/prompts";
import figlet from "figlet";
import gradient from "gradient-string";
import { execSync } from "node:child_process";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";
import { questions } from "./constants.js";
async function main(){console.clear(),await setTimeout(1e3),figlet("T e m p l i f y",((o,e)=>{if(o)return console.log("Something went wrong..."),void console.dir(o);console.log(gradient.pastel.multiline(e))})),await setTimeout(2e3);const o=await p.group(questions,{onCancel:()=>{p.cancel("Operation cancelled."),process.exit(0)}});if(o.install){const e=p.spinner();e.start("Installing via npm"),execSync(`cd ${o.path}`),execSync("npm install",{cwd:o.path}),e.stop("Installed via npm")}let e=`cd ${o.path}        \n${o.install?"":"npm install\n"}npm run dev`;p.note(e,"Next steps."),p.outro(`Problems? ${color.underline(color.cyan("https://example.com/issues"))}`)}main().catch(console.error);