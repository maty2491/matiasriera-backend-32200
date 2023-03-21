import autocannon from "autocannon";
import { PassThrough } from "stream";

function run(url) {
  const buf = [];
  const outputStream = new PassThrough();

  const inst = autocannon({
    url,
    connections: 100,
    duration: 20,
  });

  autocannon.track(inst, { outputStream });

  outputStream.on("data", (data) => buf.push(data));

  inst.on("done", () => {
    process.stdout.write(Buffer.concat(buf));
  });
}

run("http://localhost:8080/auth-bloq?username=matias&password=1234");
run("http://localhost:8080/auth-nobloq?username=matias&password=1234");

// curl -X GET "http://localhost:8080/newUser?username=matias&password=1234"