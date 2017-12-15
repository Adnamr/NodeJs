var http=require('http');
var fs=require('fs');

function onrequest(request ,response) {
    response.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('./index.html',null,function (error,data) {
        if (error)
        {
            response.writeHead(404);
            response.write('File Not fOUND');

        }else
        {
            response.write(data);
        }
        response.end();
    });

}
http.createServer(onrequest).listen(8000);