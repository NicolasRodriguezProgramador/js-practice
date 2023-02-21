const d = document;
const ls = localStorage;

export default function darkTheme (btn, classDark, classStage){

    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");
    const $stage = d.querySelector(classStage);
    let luna = "🌙", sol = "☀️";

    const darkMode = () => {
        ls.setItem("theme", "dark");
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sol;
        $themeBtn.style.backgroundColor = "#f7df1e";
        $stage.style.border = "2px solid #dddd";
        $stage.style.borderRadius = "15px";
    };
    const lightMode = () => {
        ls.setItem("theme", "light");
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = luna;
        $themeBtn.style.backgroundColor = "#222";
        $stage.style.border = "none";
    };

    d.addEventListener("click", (e) => {
        if( e.target.matches(btn) ){    
            if( $themeBtn.textContent === luna ){
                darkMode();
            }else{
                lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e) => {

        if( ls.getItem("theme") === null ) ls.setItem("theme", "light");
        if( ls.getItem("theme") === "light" ) lightMode();
        if( ls.getItem("theme") === "dark" ) darkMode();

    })

}