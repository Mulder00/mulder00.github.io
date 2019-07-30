function callEmployeeAPI() {
	token = $("#token").val();
	console.log("Token: " + token);
	marker = $("#marker").val();
	url = $("#url").val();
	if (marker != "") {console.log("Marker: " + marker);} else {console.log("No marker");}

$.ajaxSetup({
  contentType: "application/json; charset=utf-8",
  dataType: 'json',
  headers : {
    'Authorization' : 'Bearer ' + token,
  }
});	
	if (marker != "") callingUrl = url + "?marker=" + marker; else callingUrl = url;
	$.getJSON( callingUrl, function( data ) {
		console.log('Got data: ' + data);
		retCount = data.data.length;
		console.log('Data size: ' + retCount);
		$.each(data.data, function(key, val) {
			marker = val.pageMarker;
			//Sticking this in this loop as I have no idea how to get data back out
			$("#marker").val(marker);
			jsonStringValue = JSON.stringify(JSON.stringify(val));
			$("ol").append("<li onClick=\'showEmployeeData(" + jsonStringValue +")\'>" + val.fullName + "</li>");
			console.log(val.fullName);
		});
	});

}

function showEmployeeData(textdata) {
	//$('#employeeData').html('<h3>Employee data:</h3><pre><code>' + data + '</code></pre>');
	data = JSON.parse(textdata);
	$('#employeeData').html('<h3>Employee data:</h3><h4>Name</h4><p>' + data.fullName + '<h4>Employment info</h4><div id="employmentInfo"></div><h4>Address info</h4><div id="addressInfo"></div><h4>Additional fields</h4><div id="additionalFields"></div>');
		
	generateEmploymentTable(data.employments[0]);
}

function generateEmploymentTable(data) {
	$.each(data, function(key, val) {
		$("#employmentInfo").append('<p>' + key + ': ' + val + '</p>');
	});
}


$(document).ready(function() {
	var api_url = '';
	var key = 'abc';
	console.log(key);
});



