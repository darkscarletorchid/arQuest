AFRAME.registerComponent('registerevents', {
  init: function () {
    var marker = this.el;


    // Make the element emit events when found and when lost.
    //marker.setAttribute('emitevents', 'true');

    marker.addEventListener('markerFound', function(e) {
      var markerId = marker.id;
      alert('markerFound ' + markerId);
      // TODO: send request with markerId to the server

    });

    marker.addEventListener('markerLost', function() {
    });
  }
});
