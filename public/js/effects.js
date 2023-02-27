export const effects = ( function() {

    const fadeElement = (element, action) => {
        action === 'in' ? setTimeout(()=>{element.style.opacity=1}, 60) : setTimeout(()=>{element.style.opacity=0}, 60);
    }


    const scrollToElement = (anchor) => {

        const anchor_element = document.querySelector(anchor);
        const offset_top = anchor_element.offsetTop;
        const scrollable_element = document.getElementById('layer_content');
        
        
        scrollable_element.scrollTo({
            top: offset_top,
            left: 0,
            behavior:"smooth"
        })

    }


    /* scrolls the videobackground smoother than the content layer */
    const scrollEffects = () => {
        const layer_content = document.getElementById('layer_content');
        const layer_video = document.getElementById('layer_video');

        
        layer_content.addEventListener("scroll", e => {
            layer_video.setAttribute('style','top:' + -0.6 * layer_content.scrollTop + 'px');
          
        }); 
    }


    const imageFadeIn = () => {
        const images = document.querySelectorAll('.toAnimate');

        const image_observer = new IntersectionObserver(entries => {
            const [entry] = entries; 
            
               
                    entry.isIntersecting ? entry.target.classList.add('fadeIn') : entry.target.classList.remove('fadeIn');
                
              
          
        },{threshold: .5});

        images.forEach(image => {
            image_observer.observe(image)
        });
        
    }

   
    const return_object =  {
        scrollEffects: scrollEffects,
        scrollToElement: scrollToElement,
        imageFadeIn: imageFadeIn
    }


    return return_object;

})();




