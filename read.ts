const file = await Deno.open("text.txt", { read: true });
await file.readable.pipeTo(Deno.stdout.writable);