import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = (req: Request): Response => {
    try {
      const url = new URL(req.url);
      if (url.pathname === "/error") {
        throw new Error("/error");
      }
      return new Response("<h2>Hello from deno server!</h2>", {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      return new Response(`${error}`, {
        headers: { "Content-Type": "text/html" },
        status: 500,
      });
    }
  };

serve(handler, { port: 8000 });