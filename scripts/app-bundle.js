define('app',['exports', 'aurelia-router'], function (exports, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;
  class App {
    constructor() {
      this.message = 'Hello World!';
    }

    attached() {}

    configureRouter(config, router) {
      config.title = 'MapTest';

      config.map([{ route: ['', 'map'], name: 'map', moduleId: './map', nav: true, title: 'MapTest' }]);

      this.router = router;
    }
  }
  exports.App = App;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('map',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var myApp;

  class Map {

    attached() {
      myApp = this;
      var Loader = google["maps"].plugins["loader"].Loader;

      const loader = new Loader({
        apiKey: "AIzaSyBzkzafS495xLhD6oS6qDUZ0bhu9YQKuDc",
        version: "weekly"
      });
      loader.load().then(() => {
        myApp.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
      });
    }

    loadGoogleKML() {
      var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';

      var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: myApp.map
      });
      kmlLayer.addListener('click', function (event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
      });
    }

    loadRobKML() {
      //var src = 'https://papaspuds.com/map-simple/bike-routes.kml';
      //var src = "https://docs.google.com/document/d/18sQz-nrFyrQb7KM4FdVyqt78FwJQ9klAJWFfgTw_GRU/export?format="
      //var src = "https://www.dropbox.com/s/15uznvw3da7o6gx/westcampus.kml"
      // var src = "https://drive.google.com//0/uc?id=1gYxE4TL_R1aKf2bW7s40wzyBKt3S044P&export=download"
      var src = "https://raw.githubusercontent.com/pmsmith4/GoogleMapsAPITesting/main/bike-routes.kml";

      var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: myApp.map
      });
      kmlLayer.addListener('click', function (event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
      });

      console.log("Here");
    }

  }
  exports.Map = Map;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!map.html', ['module'], function(module) { module.exports = "<template><head><meta name=\"viewport\" content=\"initial-scale=1,user-scalable=no\"><meta charset=\"utf-8\"><title>KML Click Capture Sample</title><style>body,html{height:370px;padding:0;margin:0}#map{height:300px;width:480px;overflow:hidden;float:left;border:thin solid #333}#capture{height:360px;width:480px;overflow:hidden;float:left;background-color:#ececfb;border:thin solid #333;border-left:none}</style></head><body><table><tr><td><div id=\"map\"></div></td><td><div id=\"capture\"></div></td></tr><tr><td><button type=\"button\" id=\"loadGoogleKMLButton\" click.trigger=\"loadGoogleKML()\" style=\"margin-right:20px\">Load Google KML</button> <button type=\"button\" id=\"loadRobKMLButton\" click.trigger=\"loadRobKML()\" style=\"margin-right:20px\">Load Rob KML</button></td></tr></table></body></template>"; });
//# sourceMappingURL=app-bundle.js.map