const d = document;
const w = window;

export default function smartVideo(){
    
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb = (entries) => {
    
        //console.log("Entries: ", entries);
        entries.forEach((entry) => {
            //console.log("Entry: ", entry);
            if( entry.isIntersecting ){
                entry.target.play();
            } else {
                entry.target.pause();
            }
            
            w.addEventListener("visibilityChange", (e) => 
                d.visibilityState === "visible" 
                    ? entry.target.play() 
                    : entry.target.pause());
        });
    
    }

    const observer = new IntersectionObserver(cb, {threshold: 0.5});
    //console.log("Observer: ", observer)
    
    $videos.forEach((el) => observer.observe(el));

}