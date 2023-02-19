export const effects = ( function() {

    const fadeElement = (element, action) => {
        action === 'in' ? setTimeout(()=>{element.style.opacity=1}, 60) : setTimeout(()=>{element.style.opacity=0}, 60);
    }


    /* scrolls the videobackground smoother than the content layer */
    const scrollEffects = () => {
        const layer_content = document.getElementById('layer_content');
        const layer_video = document.getElementById('layer_video');

        const headlines = document.querySelector('.headlines');

        layer_content.addEventListener("scroll", e => {
            layer_video.setAttribute('style','top:' + -0.4 * layer_content.scrollTop + 'px') ;
        }); 
    }

    const isInViewPort = (element) => {
        if(element){
            const rect = element.getBoundingClientRect();
    
            // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
            // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
            const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
            const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
            return (vertInView && horInView);

        } else {
            return false;
        }
    
    }

    const return_object =  {
        scrollEffects: scrollEffects,
        isInViewPort: isInViewPort
    }

    return return_object;

})();




