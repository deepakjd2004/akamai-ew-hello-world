export function onClientRequest(request) {
  request.respondWith(200, {}, "<html><body><h1>Hello World from Akamai EdgeWorkers!</h1></body></html>");
}
