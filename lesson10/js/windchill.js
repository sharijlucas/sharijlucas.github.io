let t = parseFloat(document.getElementById('high-temp').textContent);
let s = parseFloat(document.getElementById('windSpeed').textContent);
let w = (35.74 + (0.6215 * t)) - (35.75 * Math.pow(s, 0.16)) + ((0.4275 * t) * Math.pow(s, 0.16));

if (t < 51 && s > 3) {
    document.getElementById("windChill").innerText=w.toFixed(0) + "°F";
}
else {
    document.getElementById("windChill").innerText="N/A";
}

