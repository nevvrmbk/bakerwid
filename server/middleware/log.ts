export default defineEventHandler((event) => {
  console.log(`Request: ${event.node.req.method} - ${event.node.req.url}`);
  if (event.node.res.errored) {
    console.log(
      `Error: ${event.node.res.statusCode} - ${event.node.res.statusMessage} - ${event.node.res.errored.name} - ${event.node.res.errored.message} - ${event.node.res.errored.cause}`
    );
  }
});
