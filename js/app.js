		function readTextFile(file, callback) {
		//call back function
			    var strFile = new XMLHttpRequest();
			    strFile.overrideMimeType("application/json");
			    strFile.open("GET", file, true);
			    strFile.onreadystatechange = function() {
			        if (strFile.readyState === 4 && strFile.status == "200") {
			            callback(strFile.responseText);
			        }
		    };
		    strFile.send(null);
		}

		//loop fills the products data
		readTextFile("products.json", function(text){
		    var dataSet = JSON.parse(text);
		    console.log(dataSet);

		    var output = "";
		    output += "<div class='col-md-10'>";
		    output += "<ul class='products-list'>";

			for (var i = 0; i < dataSet.length; i++) {
				output += "<li>";
				output += "<a href='#' class='product-photo'><img src='" + dataSet[i].image.small + "' height='130' alt='" + dataSet[i].name + "'></a><h2><a href='#'>" + dataSet[i].name + " </a></h2>";
				output += "<ul class='product-description'>";
				output += "<li><span>Manufacturer: </span>" + dataSet[i].specs.manufacturer + "</li>";
				output += "<li><span>Storage: </span>" + dataSet[i].specs.storage + " GB</li>";
				output += "<li><span>OS: </span>" + dataSet[i].specs.os + "</li>";
				output += "<li><span>Camera: </span>" + dataSet[i].specs.camera + " Mpx</li>";
				output += "<li><span>Description: </span>" + dataSet[i].description + "</li>";
				output += "</ul>";
				output += "<p class='product-price'>£" + dataSet[i].price + "</p>";
				output += "</li>";
			}

			output += "</ul>";
			output += "</div>";

			//returns output to file	
			document.getElementById('data').innerHTML = output;
