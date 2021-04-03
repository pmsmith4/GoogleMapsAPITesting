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
    
    var src = "https://raw.githubusercontent.com/pmsmith4/GoogleMapsAPITesting/main/KMLs/bike-routes.kml"
    

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