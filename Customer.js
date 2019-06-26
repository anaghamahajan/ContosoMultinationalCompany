var http=require("http");

var Customers=[
		{custId:1,custName:"Johnny",address:"NewYork",contact:123456789},
		{custId:2,custName:"Peter",address:"USA",contact:789456123},
		{custId:3,custName:"Lina",address:"India",contact:456789123},
		{custId:4,custName:"Adam",address:"France",contact:963258741}
];

function process_request(req,resp)
{
	
	resp.writeHead(200,{"Content-Type" : "text/plain"});
	resp.end(JSON.stringify(Customers));
}

var server=http.createServer(process_request);
server.listen(3000);
console.log("Server is listening on port 3000....");
