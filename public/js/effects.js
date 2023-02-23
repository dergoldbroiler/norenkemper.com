export const effects = ( function() {

    const fadeElement = (element, action) => {
        action === 'in' ? setTimeout(()=>{element.style.opacity=1}, 60) : setTimeout(()=>{element.style.opacity=0}, 60);
    }


    /* scrolls the videobackground smoother than the content layer */
    const scrollEffects = () => {
        const layer_content = document.getElementById('layer_content');
        const layer_video = document.getElementById('layer_video');

        
        layer_content.addEventListener("scroll", e => {
            layer_video.setAttribute('style','top:' + -0.6 * layer_content.scrollTop + 'px');
          
        }); 
    }

   
    const return_object =  {
        scrollEffects: scrollEffects,
    }


    return return_object;

})();




