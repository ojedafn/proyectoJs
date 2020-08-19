mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvcmVuY2VvIiwiYSI6ImNrYnFxczdzbjBtMmcycm1wNXNnZXdnNWEifQ.MkodX0LUGQ6IqCoOOfPkrQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [ -63.349819, -35.041224],
  zoom: 4.5

  
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-57.5774610,-38.013437]
    },
    properties: {
      title: 'Mar del Plata',
      description: 'Av. Juan B. Justo 3953'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-59.864413,-36.773418]
    },
    properties: {
      title: 'Azul, Buenos Aires',
      description: 'Av. Mitre 242'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-62.307156,-38.711990]
    },
    properties: {
      title: 'Bahia Blanca, Buenos Aires',
      description: 'CAU, Don Bosco 2291'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-58.257384,-37.851282]
    },
    properties: {
      title: 'Balcarce, Buenos Aires',
      description: 'Calle 20 801'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-61.119884,-36.237705]
    },
    properties: {
      title: 'Bolivar, Buenos Aires',
      description: 'Av F García 595'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [ -59.817056, -37.675250]
    },
    properties: {
      title: 'Benito Juarez y Chillar, Buenos Aires',
      description: 'Av. Constitución 315'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [ -61.342807,-37.992742]
    },
    properties: {
      title: 'Coronel Pringles, Buenos Aires',
      description: 'José Hernández'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-68.056001,-38.963678]
    },
    properties: {
      title: 'Neuquén',
      description: 'Ángel Edelman 229'
    }
  },
    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-60.710332,-32.967346]
    },
    properties: {
      title: 'Rosario, Santa Fe',
      description: 'Av. Pres. Perón 6615'
    }
  }]
};

  // add markers to map
  geojson.features.forEach(function(marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    if(marker.properties.title=="Mar del Plata"){
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)//agrega marker
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // agrega popups
      .setHTML('<h3>' + marker.properties.title + '</h3><a href="https://goo.gl/maps/DeciWSJFDhiUdFS27" target=_"blank">'+ marker.properties.description + '</a>'))
      .addTo(map); //agrega al mapa
    }

    else{

    // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)//agrega marker
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // agrega popups
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map); //agrega al mapa
      }
  });

  document.getElementById('botonDirec').addEventListener('click', function() {
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
    map.flyTo({
      center: [
        -57.5774610, 
        -38.013437
      ],
      zoom:16,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  });
  document.getElementById('botonSal').addEventListener('click', function() {
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
    map.flyTo({
      center: [
        -63.349819, -35.041224
      ],
      zoom:4.5,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  $('#botonSal').click(function(){
 positionabout = $('#salidas').offset().top - $('#nav').height(); // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

  