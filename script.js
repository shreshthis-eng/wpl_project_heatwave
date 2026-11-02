/* ==========================================
   HEATWAVE HOTSPOT MAP
========================================== */


/* ==========================================
   1. CREATE MAP
========================================== */

const map = L.map("heatmap").setView(
    [22.5, 78.9],
    5
);


/* ==========================================
   2. OPENSTREETMAP
========================================== */

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,

        attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    }
).addTo(map);


/* ==========================================
   3. HEATWAVE DATA
========================================== */

const hotspotData = [

    {
        city: "Delhi",
        state: "Delhi",
        lat: 28.6139,
        lng: 77.2090,
        temperature: 44.2,
        humidity: 29,
        severity: "Extreme"
    },

    {
        city: "Jaipur",
        state: "Rajasthan",
        lat: 26.9124,
        lng: 75.7873,
        temperature: 43.6,
        humidity: 31,
        severity: "Severe"
    },

    {
        city: "Ahmedabad",
        state: "Gujarat",
        lat: 23.0225,
        lng: 72.5714,
        temperature: 42.8,
        humidity: 34,
        severity: "Severe"
    },

    {
        city: "Nagpur",
        state: "Maharashtra",
        lat: 21.1458,
        lng: 79.0882,
        temperature: 41.7,
        humidity: 36,
        severity: "Warning"
    },

    {
        city: "Mumbai",
        state: "Maharashtra",
        lat: 19.0760,
        lng: 72.8777,
        temperature: 39.8,
        humidity: 58,
        severity: "Warning"
    },

    {
        city: "Pune",
        state: "Maharashtra",
        lat: 18.5204,
        lng: 73.8567,
        temperature: 38.9,
        humidity: 48,
        severity: "Warning"
    },

    {
        city: "Hyderabad",
        state: "Telangana",
        lat: 17.3850,
        lng: 78.4867,
        temperature: 37.4,
        humidity: 45,
        severity: "Normal"
    },

    {
        city: "Bengaluru",
        state: "Karnataka",
        lat: 12.9716,
        lng: 77.5946,
        temperature: 31.8,
        humidity: 62,
        severity: "Normal"
    },

    {
        city: "Chennai",
        state: "Tamil Nadu",
        lat: 13.0827,
        lng: 80.2707,
        temperature: 35.9,
        humidity: 70,
        severity: "Normal"
    },

    {
        city: "Lucknow",
        state: "Uttar Pradesh",
        lat: 26.8467,
        lng: 80.9462,
        temperature: 42.5,
        humidity: 32,
        severity: "Severe"
    },

    {
        city: "Bhopal",
        state: "Madhya Pradesh",
        lat: 23.2599,
        lng: 77.4126,
        temperature: 40.8,
        humidity: 38,
        severity: "Warning"
    },

    {
        city: "Patna",
        state: "Bihar",
        lat: 25.5941,
        lng: 85.1376,
        temperature: 41.9,
        humidity: 40,
        severity: "Severe"
    }

];


/* ==========================================
   4. SEVERITY COLORS
========================================== */

const severityColors = {

    Extreme: "#c62828",

    Severe: "#f57c00",

    Warning: "#fbc02d",

    Normal: "#2e9d68"

};


/* ==========================================
   5. CREATE CUSTOM MARKER
========================================== */

function createMarkerIcon(severity) {

    return L.divIcon({

        className: "custom-marker",

        html: `
            <div style="
                width: 20px;
                height: 20px;
                background: ${severityColors[severity]};
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 8px rgba(0,0,0,0.35);
            "></div>
        `,

        iconSize: [20, 20],

        iconAnchor: [10, 10]

    });

}


/* ==========================================
   6. CREATE POPUP
========================================== */

function createPopup(data) {

    let badgeColor = severityColors[data.severity];

    return `

        <div class="popup">

            <h3>
                📍 ${data.city}
            </h3>

            <div class="popup-row">

                <span class="popup-label">
                    State
                </span>

                <span class="popup-value">
                    ${data.state}
                </span>

            </div>


            <div class="popup-row">

                <span class="popup-label">
                    Temperature
                </span>

                <span class="popup-value">
                    ${data.temperature}°C
                </span>

            </div>


            <div class="popup-row">

                <span class="popup-label">
                    Humidity
                </span>

                <span class="popup-value">
                    ${data.humidity}%
                </span>

            </div>


            <div>

                <span
                    class="risk-badge"
                    style="
                        background:${badgeColor}20;
                        color:${badgeColor};
                    "
                >
                    ${data.severity} Risk
                </span>

            </div>

        </div>

    `;
}


/* ==========================================
   7. ADD MARKERS
========================================== */

hotspotData.forEach((data) => {

    const marker = L.marker(

        [data.lat, data.lng],

        {
            icon: createMarkerIcon(data.severity)
        }

    ).addTo(map);


    marker.bindPopup(
        createPopup(data)
    );

});


/* ==========================================
   8. COUNT HOTSPOTS
========================================== */

let extreme = 0;
let severe = 0;
let warning = 0;
let normal = 0;


hotspotData.forEach((location) => {

    if (location.severity === "Extreme") {
        extreme++;
    }

    else if (location.severity === "Severe") {
        severe++;
    }

    else if (location.severity === "Warning") {
        warning++;
    }

    else if (location.severity === "Normal") {
        normal++;
    }

});


/* ==========================================
   9. DISPLAY COUNTS
========================================== */

document.getElementById(
    "extremeCount"
).textContent = extreme;


document.getElementById(
    "severeCount"
).textContent = severe;


document.getElementById(
    "warningCount"
).textContent = warning;


document.getElementById(
    "normalCount"
).textContent = normal;


/* ==========================================
   10. MOBILE NAVIGATION
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle("show");

    }
);