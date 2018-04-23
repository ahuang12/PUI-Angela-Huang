//javascript file for the google map api

//coordinates of center of map
var Center = {lat: 23.148185, lng: -177.248224}

//coordinates of places i've travelled to
var Pittsburgh = {lat: 40.443547, lng: -79.942963}
var NewYork = {lat: 40.783481, lng: -73.970606}
var Boston = {lat: 42.3601, lng: -71.0589}
var Providence = {lat: 41.8240, lng: -71.4128}
var Cleveland = {lat: 41.4993, lng: -81.6944}
var NewOrleans = {lat: 29.9511, lng: -90.0715}
var Baltimore = {lat: 39.2904, lng: -76.6122}
var WashingtonDC = {lat: 38.9072, lng: -77.0369}
var Seattle = {lat: 47.6062, lng: -122.3321}
var SanFrancisco = {lat: 37.7749, lng: -122.4194}
var LasVegas = {lat: 36.1699, lng: -115.1398}
var GrandCanyon = {lat: 36.0544, lng: -112.1401}
var BryceCanyon = {lat: 37.5930, lng: -112.1871}
var LosAngeles = {lat: 34.0522, lng: -118.2437}
var SanDiego = {lat: 32.7157, lng: -117.1611}
var Vancouver = {lat: 49.2827, lng: -123.1207}
var Taiwan = {lat: 23.6978, lng: 120.9605}
var HongKong = {lat: 22.3964, lng: 114.1095}
var Beijing = {lat: 39.9042, lng: 116.4074}
var Singapore = {lat: 1.3521, lng: 103.8198}
var Bangkok = {lat: 13.7563, lng: 100.5018}
var KualaLumpur = {lat: 13.7563, lng: 100.5018}
var Tokyo = {lat: 35.6895, lng: 139.6917}
var Seoul = {lat: 37.5665, lng: 126.9780}
var Melbourne = {lat: -37.8136, lng: 144.9631}
var Sydney = {lat: -33.8688, lng: 151.2093}
var Brisbane = {lat: -27.4698, lng: 153.0251}

function myMap() {
    //defines the properties of the map
    var mapProp= {
        center: Center, //defines where the map is centered on load
        zoom:2, //specifies map initial zoom level
    };

    var map = new google.maps.Map(document.getElementById('googlemap'), mapProp); //selecting the map id and properties variable

    //markers for the places defined above
    var markerPittsburgh = new google.maps.Marker({
        position: Pittsburgh,
        map: map
    });

    var markerNewYork = new google.maps.Marker({
        position: NewYork,
        map: map
    });

    var markerBoston = new google.maps.Marker({
        position: Boston,
        map: map
    });

    var markerProvidence = new google.maps.Marker({
        position: Providence,
        map: map
    });

    var markerCleveland = new google.maps.Marker({
        position: Cleveland,
        map: map
    });

    var markerNewOrleans = new google.maps.Marker({
        position: NewOrleans,
        map: map
    });

    var markerBaltimore = new google.maps.Marker({
        position: Baltimore,
        map: map
    });

    var markerWashingtonDC = new google.maps.Marker({
        position: WashingtonDC,
        map: map
    });

    var markerSeattle = new google.maps.Marker({
        position: Seattle,
        map: map
    });

    var markerSanFrancisco = new google.maps.Marker({
        position: SanFrancisco,
        map: map
    });

    var markerLasVegas = new google.maps.Marker({
        position: LasVegas,
        map: map
    });

    var markerGrandCanyon = new google.maps.Marker({
        position: GrandCanyon,
        map: map
    });

    var markerBryceCanyon = new google.maps.Marker({
        position: BryceCanyon,
        map: map
    });

    var markerLosAngeles = new google.maps.Marker({
        position: LosAngeles,
        map: map
    });

    var markerSanDiego = new google.maps.Marker({
        position: SanDiego,
        map: map
    });

    var markerVancouver = new google.maps.Marker({
        position: Vancouver,
        map: map
    });

    var markerTaiwan = new google.maps.Marker({
        position: Taiwan,
        map: map
    });

    var markerHongKong = new google.maps.Marker({
        position: HongKong,
        map: map
    });

    var markerBeijing = new google.maps.Marker({
        position: Beijing,
        map: map
    });

    var markerSingapore = new google.maps.Marker({
        position: Singapore,
        map: map
    });

    var markerBangkok = new google.maps.Marker({
        position: Bangkok,
        map: map
    });

    var markerKualaLumpur = new google.maps.Marker({
        position: KualaLumpur,
        map: map
    });

    var markerTokyo = new google.maps.Marker({
        position: Tokyo,
        map: map
    });

    var markerSeoul = new google.maps.Marker({
        position: Seoul,
        map: map
    });

    var markerMelbourne = new google.maps.Marker({
        position: Melbourne,
        map: map
    });

    var markerSydney = new google.maps.Marker({
        position: Sydney,
        map: map
    });

    var markerBrisbane = new google.maps.Marker({
        position: Brisbane,
        map: map
    });
}