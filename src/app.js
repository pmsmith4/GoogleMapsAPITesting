
import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached()
  {}

  configureRouter(config, router){
    config.title = 'MapTest';
  
    config.map([
       { route: ['','map'], name: 'map', moduleId:'./map', nav:true, title:'MapTest' }
    ]);

    this.router = router;
 }
}


  

