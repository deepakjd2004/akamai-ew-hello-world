export function onClientRequest(request) {
  request.respondWith(200, {}, "<html><body><h1>Hello World from Akamai EdgeWorkers, Yahooo!</h1></body></html>");
}
