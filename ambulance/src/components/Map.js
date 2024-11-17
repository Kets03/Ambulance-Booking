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
    { lat: 18.51736035013985, lng: 73.78171249525757, name: " Om Hospital" },
    {
      lat: 18.521078749609558,
      lng: 73.76703867857354,
      name: "99 Clinic Multispeciality Hospital",
    },
    {
      lat: 18.52084855721803,
      lng: 73.76976979431669,
      name: "Chellaram Hospital - Diabetes Care & Multispeciality",
    },
    {
      lat: 18.516821613882936, 
      lng: 73.77479089885932,
      name: "Tirupati Hospital",
    },
    {
      lat: 18.516143539371548,
      lng: 73.78080262013592,
      name: "Bavdhan Medicare Centre",
    },
    {
      lat: 18.515835565682604,
      lng: 73.78213785240398,
      name: "Lopmudra Diagnostics and Wellness Center",
    },
    {
      lat: 18.50981285753866,
      lng: 73.79022142087669,
      name: "Borse Nursing Home",
    },
    {
      lat: 18.50899156275135,
      lng: 73.79217013824088,
      name: "Capital Hospital",
    },
    {
      lat: 18.509470651856244,
      lng: 73.7931084095644,
      name: "VENKATESH GENERAL HOSPITAL",
    },
    { lat: 18.50772539223279, lng: 73.7985215133538, name: "Kothrud Hospital" },
    { lat: 18.507793834107332, lng: 73.7996402215796, name: "City Hospital" },
    {
      lat: 18.508675792519416,
      lng: 73.80625742197958,
      name: "Sahyadri Hospital Kothrud",
    },
    {
      lat: 18.510140826875695,
      lng: 73.81269472368888,
      name: "Krishna Hospital",
    },
    {
      lat: 18.504024941881998,
      lng: 73.80775512035657,
      name: "Shankarrao Dhondiba Sutar Multi-speciality Hospital",
    },
    {
      lat: 18.496873905169586,
      lng: 73.81249915810088,
      name: "Deoyani Multi Speciality Hospital",
    },
    {
      lat: 18.4947802, 
      lng: 73.8109696,
      name: "Shashwat Hospital Kothrud",
    },
    {
      lat: 18.50282685440805,
      lng: 73.83296428644292,
      name: "Deenanath Mangeshkar Hospital and Research Center",
    },
    {
      lat: 18.514344981086943,
      lng: 73.83934369055592,
      name: "Sahyadri Super Speciality Hospital, Deccan Gymkhana, Pune",
    },
    {
      lat: 18.501128184354975,
      lng: 73.75623912679684,
      name: "Life line multispeciality hospital - Hospital in Bhugaon",
    },
    { lat: 18.50101635172552, lng: 73.75572319448062, name: "Varad Hospital" },
    {
      lat: 18.500848602644393,
      lng: 73.75553156247744,
      name: "SHATAYU HOSPITAL BHUGAON | MULTISPECIALITY HOSPITAL",
    },
    {
      lat: 18.500179744823367,
      lng: 73.75383217936741,
      name: "Asian Speciality Hospital",
    },
    {
      lat: 18.488081524742555,
      lng: 73.90449607166427,
      name: "Ruby Hall Clinic, Wanowrie",
    },
    {
      lat: 18.511478963949816,
      lng: 73.8203919322502,
      name: "Vishwaraj Hospital",
    },
    {
      lat: 18.503225042339732,
      lng: 73.81649225923478,
      name: "Vatsal Hospital (Yardi Hospital)",
    },
    {
      lat: 18.510061979798284,
      lng: 73.82147043927357,
      name: "Sushrut hospital (SMHIPL) ",
    },
    { lat: 18.51893331286438, lng: 73.84267061901402, name: "Prayag Hospital" },
    {
      lat: 18.513317568295143,
      lng: 73.84198397351634,
      name: "Poona Hospital And Research Centre",
    },
    {
      lat: 18.50452733722394,
      lng: 73.84121149733147,
      name: "Global Hospital & Research Institute",
    },
    {
      lat: 18.49288772569734,
      lng: 73.84610384650234,
      name: "Shraddha Hospital",
    },
    {
      lat: 18.488339515334506,
      lng: 73.8093309120089,
      name: "Kulkarni hospital and diagnostic centre",
    },
    {
      lat: 18.48907212108026,
      lng: 73.79956483734662,
      name: "Mai Mangeshkar Hospital",
    },
    {
      lat: 18.504873257561826,
      lng: 73.84095952070996,
      name: "Global Hospital & Research Institute",
    },
    {
      lat: 18.497873320431882,
      lng: 73.86190220838878,
      name: "Ranka Hospital ",
    },
    {
      lat: 18.532320830181572,
      lng: 73.84686385635692,
      name: "Deccan Hardikar Hospital - Best Multi-Speciality Hospital in Pune | Spine Surgery | Orthopaedics | Piles | Fissure | Fistula",
    },
    {
      lat: 18.53207669025256,
      lng: 73.87699042813776,
      name: "Jehangir Hospital",
    },
    {
      lat: 18.506185713914657,
      lng: 73.73879670888304,
      name: "Unique Multispeciality Hospital",
    },
    {
      lat: 18.572507597884556,
      lng: 73.76963138367259,
      name: "Manipal Hospitals Baner",
    },
    {
      lat: 18.572182154707555,
      lng: 73.80190372303686,
      name: "Sanjivani Medipoint Hospital",
    },
    {
      lat: 18.573483924068583,
      lng: 73.81048679175768,
      name: "Aundh Institute of Medical Sciences",
    },
    {
      lat: 18.588453557258806,
      lng: 73.81597995573901,
      name: "Sangvi MultiSpeciality Hospital",
    },
    {
      lat: 18.506432810782936,
      lng: 73.92728556584571,
      name: "Noble Hospitals & Research Centre",
    },
    { lat: 18.519391110149787, lng: 73.77276940641345, name: "EMF" },
    {
      lat: 18.48260066238088,
      lng: 73.86203332159205,
      name: "Sahyadri Hospital, Bibwewadi, Pune",
    },
    {
      lat: 18.494392976486974,
      lng: 73.81583296842143,
      name: "Gandhi hospital",
    },
    { lat: 18.49715718048603, lng: 73.8113944055223, name: "Chaitanya Clinic" },
    {
      lat: 18.510901865536656,
      lng: 73.8092509257801,
      name: "Dr Nand Kishor N Mantri",
    },
    {
      lat: 18.51632200134299,
      lng: 73.84824184351847,
      name: "Morya General Hospital",
    },
    {
      lat: 18.52145161475391,
      lng: 73.86232756776016,
      name: "Samarth Hospital",
    },
    { lat: 18.522032315981825, lng: 73.86712487956409, name: "KEM Hospital" },
    {
      lat: 18.461813364312718,
      lng: 73.85682211016656,
      name: "Bharati Hospital",
    },
    {
      lat: 18.464690948083344,
      lng: 73.77311825645981,
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
      lat: 18.567544520416618,
      lng: 73.80530476462836,
      name: "Kotbagi Hospital",
    },
    {
      lat: 18.546877039410795,
      lng: 73.82882237292343,
      name: "Samarth Hospital",
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
      lat: 18.599598571701563,
      lng: 73.7306213358107,
      name: "Ruby Hall Clinic - Hinjewadi",
    },
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
      lat: 18.568001383939983,
      lng: 73.78575430432048,
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
      lat: 18.5020244804391,
      lng: 73.81339430702995,
      name: "Ear Nose Throat Hospital",
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
