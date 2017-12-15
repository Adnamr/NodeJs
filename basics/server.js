// var http=require('http');
//
// function onRequest(request, response)
// {
//     response.writeHead(200,{'content-type':'text/plain'});
//     response.write('hello world');
//     response.end();
// }
// http.createServer(onRequest).listen(8000);

var http=require('http');
function  Onrequest(request , response) {
    response.writeHead(200,{'content-type':'text/plain'});
    response.write('test2');
    response.end();
}
http.createServer(Onrequest).listen(8000);