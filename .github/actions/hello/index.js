const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Invalid arguments");

  core.debug("Debug message");
  core.warning("warning message");
  core.error("error message");

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hola");
} catch (error) {
  core.setFailed(error.message);
}
