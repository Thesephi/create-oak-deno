import { assertSnapshot, superoak } from "../dev_deps.ts";
import { Application } from "@oak/oak";
import { useOakServer, useOas } from "@dklab/oak-routing-ctrl";
import { MyController } from "../src/MyController.ts";

const app = new Application();
useOakServer(app, [MyController]);
useOas(app);

Deno.test("call /v1/hello/:name", async () => {
  const request = await superoak(app);
  await request.get("/v1/hello/tester").expect("hello, tester");
});

Deno.test("call /oas.json", async (t) => {
  const request = await superoak(app);
  const resp = await request.get("/oas.json");
  const respBody = await resp.body;
  await assertSnapshot(t, respBody);
});
