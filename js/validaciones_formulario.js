const d = document;

export default function contactFormValidations (){
    
    const $form = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");

    //console.log($inputs);

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
        
        if( e.target.matches(".contact-form [required]") ){
            let $input = e.target;
            let pattern = $input.pattern || $input.dataset.pattern;
            //en consola se ejecuta presionando teclas dentro de los inputs
            //console.log("input: ", $input, "y pattern: ", pattern);

            if( pattern && ( $input.value !== "" ) ){
                //console.log("El input tiene patrón.")
                let expresionRegular = new RegExp(pattern);
                return !expresionRegular.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            }

            if( !pattern ){
                //console.log("El input NO tiene patrón.")
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    d.addEventListener("submit", (e) => {
        
        //e.preventDefault();
        //alert("Enviando Formulario.");

        const $loaderBlack = d.querySelector(".contact-form-loader-black");
        const $loaderWhite = d.querySelector(".contact-form-loader-white");

        const $response = d.querySelector(".contact-form-response");
        
        if( localStorage.getItem("theme") === "dark"){
            
            $loaderWhite.classList.remove("none");

            setTimeout(() => {
                $loaderWhite.classList.add("none");
                $response.classList.remove("none");
                $form.reset();
                
                setTimeout(() => { 
                    $response.classList.add("none");
                }, 3000);
            }, 3000);
        }

        if( localStorage.getItem("theme") === "light"){   

            $loaderBlack.classList.remove("none");

            setTimeout(() => {
                $loaderBlack.classList.add("none");
                $response.classList.remove("none");
                $form.reset();

                setTimeout(() => { 
                    $response.classList.add("none");
                }, 3000);
            }, 3000);
        }
    
    });

}