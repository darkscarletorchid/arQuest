AFRAME.registerComponent("registerevents",{init:function(){var e=this.el;e.addEventListener("markerFound",function(n){var t=e.id;window.dispatchEvent(new CustomEvent("markerFound",{detail:{markerId:t}})),alert("markerFound "+t)}),e.addEventListener("markerLost",function(){})}});