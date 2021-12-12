
// animacion loader
var animation = bodymovin.loadAnimation({
 container: document.getElementById('preload'),
   render: 'svg',
  loop: false,
  autoplay: true,
 path: 'data.json'
});
// animacion cel
var animation_cel = bodymovin.loadAnimation({
    container: document.getElementById('cel_on'),
      render: 'svg',
     loop: true,
     autoplay: true,
    path: 'data_cell_call.json'
});

// evento loader   
window.addEventListener('load', () =>{
    setTimeout(carga, 2350);
    function carga(){
        document.getElementById('preload').className = 'preload-finish';
        document.getElementById('body').className = 'scroll-on';
    }
});

document.getElementById('cel_on').addEventListener("click", animation_cel=>{
    document.getElementById('cel_on').className = 'preload-finish';
    
    animation_cel = bodymovin.loadAnimation({
        container: document.getElementById('cel_off'),
          render: 'svg',
         loop: false,
         autoplay: false,
        path: 'data_cel.json'
       })
});
