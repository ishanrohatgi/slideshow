import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slideshow';

  imageList = [
   {
    url:'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22321605/jbareham_210222_ecl1074_pokemon25_0002.jpg',
   },
   {
    url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/cutest-pokemon-of-all-time.png'
   },
   {
    url: 'https://wallpapers.com/images/featured/pokemon-pictures-fw1l53kqy2o4e5p1.jpg'
   },
   {
    url: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/_tiles/all-seasons/season-encylopedia-169.jpg'
   },
   {
    url: 'https://static.onecms.io/wp-content/uploads/sites/6/2022/12/16/Pokemon-121622-1.jpg'
   }
  ]
}
