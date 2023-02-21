const d = document;

export default function searchFilter(selector){
    
    d.addEventListener("keyup", (e) => {
        //console.log(e.key);
        //console.log(e.target.value);

        if( e.key.valueOf() === "Escape" ) e.target.value = "";

        d.querySelectorAll(selector).forEach( (card) => {
          card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? card.classList.remove("filter")
          : card.classList.add("filter");
          console.log(e.target.value);
        }
        );
    })

}