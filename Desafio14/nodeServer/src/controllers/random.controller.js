import { fork } from 'child_process'
import yargs from "yargs";

const getRandom = (req, res) => {
    const { cant } = req.query
    const childProcess = fork('../../child.js')
    const quantity = cant ? cant : 100000000

    childProcess.send(quantity);

    childProcess.on("message", (response) => {
        res.json(response);
    });
}

const args = yargs(process.argv.slice(2))
  .alias({
    p: "puerto",
  })
  .default({
    puerto: 8080,
  }).argv;

const getInfo = (req, res) => {
    res.json({
        entryArgs: JSON.stringify(args),
        platform: process.platform,
        versionNode: process.version,
        memory: process.memoryUsage().rss,
        path: process.execPath,
        processID: process.pid,
        dir: process.cwd(),
    });
  };

export const randomController = {
    getRandom,
    getInfo 
}