function callEmployeeAPI(employeeCount) {
	token = $("#token").val();
	console.log("Token: " + token);
	marker = $("#marker").val();
	url = $("#url").val();
	if (marker != "") {console.log("Marker: " + marker);} else {console.log("No marker");}
//00D1t000000DVG4!AQUAQPD8iOC6pd1IgOqSNyej7z58iH91ljCecPuMSTZ1zbdmDnmuJQmJAn1y8t5VjAWzqE54iIK.lyrkqDiJN83g9Ev6.sd6
$.ajaxSetup({
  contentType: "application/json; charset=utf-8",
  dataType: 'json',
  headers : {
    'Authorization' : 'Bearer ' + token,
  },
  error: function(jqXHR, textStatus, errorThrown) {
	  $("#errorSection").html('<div class="alert alert-danger" role="alert"><p>Status code: ' + jqXHR.status + '</p><p><strong>Error: </strong> ' + textStatus +' : ' + errorThrown + '</p></div>');
  }
});	
	if (marker != "") callingUrl = url + "?marker=" + marker; else callingUrl = url;
	$.getJSON( callingUrl, function( data ) {
		if (data) {
		retCount = data.data.length;
		$("#employeeCount").html(employeeCount + retCount + ' new employees loaded.');
		console.log('Data size: ' + retCount);
		$.each(data.data, function(key, val) {
			//Sticking this in this loop as I have no idea how to get data back out
			$("#marker").val(val.pageMarker);
			jsonStringValue = JSON.stringify(JSON.stringify(val));
			$("ul").append("<a href='#' class='list-group-item' onClick=\'showEmployeeData(" + jsonStringValue +")\'>" + val.fullName + "</a>");
			console.log(val.fullName);
		});
		}
	if ($("#fetchAll").is(":checked") && marker != $("#marker").val()) callEmployeeAPI(employeeCount + retCount);
		
	});

}

function showEmployeeData(textdata) {
	//$('#employeeData').html('<h3>Employee data:</h3><pre><code>' + data + '</code></pre>');
	data = JSON.parse(textdata);
	$('#employeeData').html('<div class="card"><h4 class="card-header">Employee data</h4><div class="card-body"><h5 class="card-title">Contact</h5><p class="card-text">' + data.fullName + '</p><p class="card-text">' + data.hrDepartment + '</p><hr><h5 class="card-title">Employment info</h5><p class="card-text" id="employmentInfo"></p><hr><h5 class="card-title">Address info</h5><p class="card-text" id="addressInfo"></p><hr><h5 class="card-title">Additional fields</h5><p class="card-text" id="additionalFields"></p></div></div>');
		
	generateEmploymentTable(data.employments[0]);
	generateAddressDetail(data.addresses);
	generateAdditionalFieldsList(data.additionalFields);
}

function generateEmploymentTable(data) {
	$.each(data, function(key, val) {
		$("#employmentInfo").append('<p>' + key + ': ' + val + '</p>');
	});
}

function generateAddressDetail(data) {
	$("#addressInfo").append('<p>Not yet implemented.</p>');
}

function generateAdditionalFieldsList(data) {
	if (data.length > 0)
	for (var i=0; i<data.length; i++) {
		$("#additionalFields").append("<p>" + data[i].name + ": " + data[i].value + "</p>");
	}
}


$(document).ready(function() {
	var api_url = '';
	var key = 'abc';
	console.log(key);
});



