

// Função para geocodificar o endereço fixo e adicionar marcador ao mapa
function geocodeAddress() {
  const address = "Rua Dona Antônia, 1098, Guarulhos, São Paulo, Brasil";
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ 'address': address }, function(results, status) {
    if (status === 'OK') {
      const mapOptions = {
        center: results[0].geometry.location,
        zoom: 12,
      };
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: address,
      });
    } else {
      alert('Erro ao geocodificar o endereço: ' + status);
    }
  });
}

function initMap() {
   geocodeAddress();
}
