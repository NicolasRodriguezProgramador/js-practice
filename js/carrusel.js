const d = document;

export default function slider (){

    const $prevButton = d.querySelector(".slider-buttons .prev");
    const $nextButton = d.querySelector(".slider-buttons .next");
    const $slides = d.querySelectorAll(".slider-slide");

    let i = 0;

    d.addEventListener("click", (e)=>{
        
        if( e.target === $prevButton ){

            e.preventDefault();
            
            $slides[i].classList.remove("active");
            i--;

            if( i < 0 ) i = $slides.length - 1;
            
            $slides[i].classList.add("active");
        }

        if( e.target === $nextButton ){

            e.preventDefault();
            
            $slides[i].classList.remove("active");
            i++;
            
            if( i > ($slides.length - 1) ) i = 0;
            
            $slides[i].classList.add("active");
        }

    });
}