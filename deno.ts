import { serve } from "https://deno.land/std@0.62.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("Listening on http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Welcome to Deno\n" });
}
