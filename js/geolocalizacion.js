const d = document, n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }

    const success = (position) => {
        //console.log(position);
        const coords = position.coords;
        //console.log(`Presición: ${position.coords.accuracy}`);
        //console.log(`Latitud: ${position.coords.latitude}`);
        //console.log(`Longitud: ${position.coords.longitude}`);
        $id.innerHTML = `
        <p>Tus coordenadas son:</p>
        <ul>
            <li><b>Presición:</b> ${coords.accuracy} metros.</li>
            <li><b>Latitud:</b> ${coords.latitude}.</li>
            <li><b>Longitud:</b> ${coords.longitude}.</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };

    const error = (err) => {
        console.log(`Error: ${err.code}: ${err.message}`);
        $id.innerHTML = `<p><b>Error:</b> ${err.code}: ${err.message}</p>`;
    };

    n.geolocation.getCurrentPosition(success, error, options);
}