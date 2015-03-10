$(document).ready(function(){
	$("#add_ligne").hide();
	$("#cancel_btn").hide();
    $("#dialogue").hide();
    $("#btn_valider").hide();
	var map = L.map('map').setView([36.80928,10.18467], 13);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(map);

		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);

		}
		map.on('click', onMapClick);
		
		$("#btn").click(function(){
			$("#add_ligne").show();
			$("#cancel_btn").show();
            $("#dialogue").show();
            $("#btn_valider").show();
            $("#btn").hide();
			
    });
    $("#cancel_btn").click(function(){
			$("#add_ligne").hide();
			$("#cancel_btn").hide();
            $("#dialogue").hide();
            $("#btn_valider").hide();
            $("#btn").show();
    });
    
});
