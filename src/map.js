var myApp;

export class Map {

attached()
  {
    myApp = this;
    var Loader = google["maps"].plugins["loader"].Loader

    const loader = new Loader({
      apiKey: "AIzaSyBzkzafS495xLhD6oS6qDUZ0bhu9YQKuDc",
      version: "weekly",
    });
    loader.load().then(() => {
        myApp.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });

  }

  loadGoogleKML()
  {
    var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';

    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: myApp.map
      });
    kmlLayer.addListener('click', function(event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
    });
  }

  loadRobKML()
  {
    //var src = 'https://papaspuds.com/map-simple/bike-routes.kml';
    //var src = "https://docs.google.com/document/d/18sQz-nrFyrQb7KM4FdVyqt78FwJQ9klAJWFfgTw_GRU/export?format="
    //var src = "https://www.dropbox.com/s/15uznvw3da7o6gx/westcampus.kml"
   // var src = "https://drive.google.com//0/uc?id=1gYxE4TL_R1aKf2bW7s40wzyBKt3S044P&export=download"
    var src = "https://raw.githubusercontent.com/pmsmith4/GoogleMapsAPITesting/main/bike-routes.kml"
    

    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: myApp.map
      });
    kmlLayer.addListener('click', function(event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
    });

    console.log("Here")


  }

}