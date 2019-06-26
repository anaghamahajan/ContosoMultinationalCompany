var http=require("http");

var Employees=[
		{empId:1,empName:"Anagha",address:"Pune",contact:123456789},
		{empId:2,empName:"Shreya",address:"PrayagRaj",contact:789456123},
		{empId:3,empName:"Pratiksha",address:"Nanded",contact:456789123},
		{empId:4,empName:"Neelam",address:"Pune",contact:963258741}
];

function process_request(req,resp)
{
	
	resp.writeHead(200,{"Content-Type" : "text/plain"});
	resp.end(JSON.stringify(Employees));
}

var server=http.createServer(process_request);
server.listen(2000);
console.log("Server is listening on port 2000....");
