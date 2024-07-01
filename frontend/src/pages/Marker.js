function initMap(addresses) {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -25.363, lng: 131.044 }, // Default center if no addresses are provided
    });
  
    // Iterate over each address and create a marker
    addresses.forEach((address) => {
      // Geocode the address to get its latitude and longitude
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: address,
          });
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    });
  }
  
  window.initMap = initMap;
  