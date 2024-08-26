function route(pathname, handle, response, productId){
    console.log('pathname : ' + pathname);

    if (handle[pathname]){
        handle[pathname](response, productId);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found');
        response.end();
    }
}

exports.route = route;