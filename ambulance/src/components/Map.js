import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
// Custom Marker Icon
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const App = () => {
  const hospitalPositions = [
    { lat: 18.5164874852838, lng: 73.78179042069176, name: " Om Hospital" },
    {
      lat: 18.52020781258747, 
      lng: 73.76723122528675,
      name: "99 Clinic Multispeciality Hospital",
    },
    {
      lat: 18.519581966342322, 
      lng: 73.77003573118074,
      name: "Chellaram Hospital - Diabetes Care & Multispeciality",
    },
    {
      lat: 18.516821613882936, 
      lng: 73.77479089885932,
      name: "Tirupati Hospital",
    },
    {
      lat: 18.51562617881478, 
      lng: 73.78093315136321,
      name: "Bavdhan Medicare Centre",
    },
    {
      lat: 18.515601319811672, 
      lng: 73.78216852252805,
      name: "Lopmudra Diagnostics and Wellness Center",
    },
    {
      lat: 18.509315474894734,
      lng: 73.79052088441442,
      name: "Borse Nursing Home",
    },
    {
      lat: 18.50855289722022, 
      lng: 73.7924153507588,
      name: "Capital Hospital",
    },
    {
      lat: 18.508523668430925, lng:73.7930893886184, name: "VENKATESH GENERAL HOSPITAL",
    },
    { lat: 18.507268365866043, lng:73.79878828116503, name: "Kothrud Hospital" },
    { lat: 18.50723865408826, lng:73.799765670344, name: "City Hospital" },
    {
      lat: 18.50752772840492, lng:73.8058123737312,
      name: "Sahyadri Hospital Kothrud",
    },
    {
      lat: 18.509249567848983, lng:73.81278297905797,
      name: "Krishna Hospital",
    },
    {
      lat: 18.50374610399705, lng:  73.8079619453081,
      name: "Shankarrao Dhondiba Sutar Multi-speciality Hospital",
    },
    {
      lat: 18.49584322955004, lng: 73.81250596676962,
      name: "Deoyani Multi Speciality Hospital",
    },
    {
      lat: 18.494717231274613, lng:73.81352438333558,
      name: "Shashwat Hospital Kothrud",
    },
    {
      lat: 18.501984312068434, lng:73.83240237811586,
      name: "Deenanath Mangeshkar Hospital and Research Center",
    },
    {
      lat: 18.51304086788773, lng: 73.83933774040214,
      name: "Sahyadri Super Speciality Hospital, Deccan Gymkhana, Pune",
    },
    { lat: 18.500874702342593, lng: 73.75572415209312, name: "Varad Hospital" },
    {
      lat: 18.500760847001846, lng: 73.75558938232633,
      name: "SHATAYU HOSPITAL BHUGAON | MULTISPECIALITY HOSPITAL",
    },
    {
      lat: 18.485167730413487, lng: 73.90471785552583,
      name: "Ruby Hall Clinic, Wanowrie",
    },
    {
      lat: 18.50770136369513, lng:73.81985149058674,
      name: "Vishwaraj Hospital",
    },
    {
      lat: 18.50255097437986, lng:73.8163883656204,
      name: "Vatsal Hospital (Yardi Hospital)",
    },
    {
      lat: 18.50909477993141, lng: 73.82152300367213,
      name: "Sushrut hospital (SMHIPL) ",
    },
    { lat: 18.5175068363265, lng: 73.84279849936274, name: "Prayag Hospital" },
    {
      lat: 18.511162729522997, lng:73.8421887191924,
      name: "Poona Hospital And Research Centre",
    },
    {
      lat: 18.501216523063736, lng: 73.84102692876807,
      name: "Global Hospital & Research Institute",
    },
    {
      lat: 18.490946358409108, lng: 73.84590985054936,
      name: "Shraddha Hospital",
    },
    {
      lat: 18.484717838462554, lng: 73.8095034223706,
      name: "Kulkarni hospital and diagnostic centre",
    },
    {
      lat: 18.4853149397467,
      lng: 73.79964731619691,
      name: "Mai Mangeshkar Hospital",
    },
    {
      lat: 18.49499424668289, lng: 73.86176926117399,
      name: "Ranka Hospital",
    },
    {
      lat: 18.530450437184726, lng: 73.84749892989625,
      name: "Deccan Hardikar Hospital - Best Multi-Speciality Hospital in Pune | Spine Surgery | Orthopaedics | Piles | Fissure | Fistula",
    },
    {
      lat: 18.530397575805328, lng: 73.87670977634293,
      name: "Jehangir Hospital",
    },
    {
      lat: 18.501114375749072, lng: 73.74189717890684,
      name: "Unique Multispeciality Hospital",
    },
    {
      lat: 18.566482931064304, lng: 73.76963790713462,
      name: "Manipal Hospitals Baner",
    },
    {
      lat: 18.56494112531608, lng: 73.80225096952303,
      name: "Sanjivani Medipoint Hospital",
    },
    {
      lat: 18.562964004992992, lng: 73.80995584987666,
      name: "Aundh Institute of Medical Sciences",
    },
    {
      lat: 18.58111973667547, lng: 73.81578375239457,
      name: "Sangvi MultiSpeciality Hospital",
    },
    { lat: 18.51205335646042, lng: 73.77243652994322, name: "EMF" },
    {
      lat: 18.47815196296364, lng: 73.86206094972586,
      name: "Sahyadri Hospital, Bibwewadi, Pune",
    },
    {
      lat: 18.51971540136809, lng: 73.8512387594836,
      name: "Gandhi hospital",
    },
    { lat: 18.531917009456542, lng: 73.83986166178624, name: "Chaitanya Clinic" },
    {
      lat: 18.508297465767466, lng: 73.8089633868616,
      name: "Dr Nand Kishor N Mantri",
    },
    {
      lat: 18.51480994580922, lng: 73.84842367194743,
      name: "Morya General Hospital",
    },
    {
      lat: 18.519692181647454, lng: 73.86240443064646,
      name: "Samarth Hospital",
    },
    { lat: 18.519943098272343, lng: 73.86690320551305, name: "KEM Hospital" },
    {
      lat: 18.4594590696346, lng: 73.85731303617284,
      name: "Bharati Hospital",
    },
    {
      lat: 18.461182228632165, lng: 73.77327190994343,
      name: "Nagare Nursing Home",
    },
    {
      lat: 18.58451041167059,
      lng: 73.8287683632062,
      name: "Moraya Hospital (Multi Speciality)",
    },
    {
      lat: 18.579954470118437,
      lng: 73.82705174946203,
      name: "Seva Hospital ( Piles, Maternity & Surgical Hospital )",
    },
    {
      lat: 18.5884154074834,
      lng: 73.81640874424819,
      name: "Dr.Nilapwar Hospital & ICU(DNH)",
    },
    {
      lat: 18.56196861699219, lng: 73.80477982590605,
      name: "Kotbagi Hospital",
    },
    {
      lat: 18.56396450609503,
      lng: 73.78985524093086,
      name: "Dhanwantari Hospital",
    },
    {
      lat: 18.593731260128468,
      lng: 73.73874306573508,
      name: "Sanjeevani Multispeciality Hospital",
    },
    {
      lat: 18.605282654682878,
      lng: 73.74766945720475,
      name: "Golden Care Hospital",
    },
    { lat: 18.6005645741259, lng: 73.733764885877, name: "Hinjawadi Hospital" },
    {
      lat: 18.60007648951212,
      lng: 73.75556588068153,
      name: "Lifepoint Multispecialty Hospital",
    },
    {
      lat: 18.609675233060017,
      lng: 73.77547860040558,
      name: "Phoenix Hospital",
    },
    {
      lat: 18.612115505374902,
      lng: 73.80174279146493,
      name: "Oasis Multispeciality Hospital",
    },
    {
      lat: 18.637492260834865,
      lng: 73.84448647428562,
      name: "Medicover Hospitals | Best Multispeciality Hospital in Pune",
    },
    { lat: 18.590213463293328, lng: 73.81063088412519, name: "Bora Hospital" },
    {
      lat: 18.614565909680366,
      lng: 73.75053405610029,
      name: "Pentagon Hospital",
    },
    {
      lat: 18.616192714925226,
      lng: 73.75637054283045,
      name: "Ashraya Hospital | Multispeciality Hospital In Pune",
    },
    {
      lat: 18.579423120969913,
      lng: 73.78246307174179,
      name: "Umarji Mother and Child Care Hospital (उमरजी माता आणि लहान मुलांचे रुग्णालय)",
    },
    {
      lat: 18.608058533133615,
      lng: 73.79482269069979,
      name: "Lotus Multi-specialty Hospital",
    },
    { lat: 18.590782976987537, lng: 73.81909902406532, name: "Pooja Hospital" },
    { lat: 18.58873070605378, lng: 73.8137580949931, name: "Aditya Hospital" },
    {
      lat: 18.572106400408487,
      lng: 73.83793662561297,
      name: "Sahyadri Hospital Bopodi",
    },
    {
      lat: 18.565696369812017, lng: 73.78601857840162,
      name: "Jupiter Hospital",
    },
    {
      lat: 18.54262524881365,
      lng: 73.7275876775262,
      name: "Symbiosis University Hospital & Research Centre",
    },
    {
      lat: 18.525372880576118,
      lng: 73.86629007015497,
      name: "B. J. Government Medical College & Sassoon General Hospital",
    },
    {
      lat: 18.525861179091702,
      lng: 73.85753534005974,
      name: "Purohit Hospital",
    },
    {
      lat: 18.488838094773218,
      lng: 73.85716795831787,
      name: "Mahajan Multispeciality Hospital",
    },
    {
      lat: 18.48476801770408,
      lng: 73.86111616992945,
      name: "Chandralok Hospital",
    },
    {
      lat: 18.49486163135969,
      lng: 73.87196302306391,
      name: "Pune Adventist Hospital",
    },
    {
      lat: 18.475487880583458,
      lng: 73.88775586978164,
      name: "Satyanand Hospital",
    },
    {
      lat: 18.507070853071326,
      lng: 73.89994382736523,
      name: "Inamdar Multispeciality Hospital",
    },
    {
      lat: 18.628542885911493,
      lng: 73.91082760564944,
      name: "Orchid Speciality Hospital",
    },
  ];

  return (
    <div className="container">
      <div className="map-container">
        <MapContainer
          center={[18.5004, 73.855]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {hospitalPositions.map((hospital, index) => (
            <Marker
              key={index}
              position={[hospital.lat, hospital.lng]}
              icon={markerIcon}
            >
              <Popup>
                <div style={{ textAlign: "center" }}>
                  <strong>{hospital.name}</strong>
                  <br />
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      style={{
                        padding: "5px 10px",
                        fontSize: "12px",
                        width: "100px",
                        height: "30px",
                      }}
                    >
                      Get Directions
                    </button>
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
