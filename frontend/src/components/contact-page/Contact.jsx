import React from "react";
import { Helmet } from "react-helmet";
// import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api";
import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Spinner from "./Spinner";

function Contact() {
  let { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCMHyr1aufS6m8ojqg9YBhvUMXomU4dcgw",
  });



  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Contact</title>
      </Helmet>

      <section id="contact" className="container my-5 py-5">
        <div className="contact-div">
          <div className="container text-center mt-5">
            <h3>Contact us</h3>
            <hr className="mx-auto" />
            <p className="w-50 mx-auto">
              Phone number: <span>+381 63 135 3942</span>
            </p>
            <p className="w-50 mx-auto">
              Email address: <span>info@outlook.com</span>
            </p>
            <p className="w-50 mx-auto">We ship to every continent.</p>
          </div>
          {!isLoaded ? (<Spinner />) : <Map />}

        </div>
      </section>

    </>
  );
}

export default Contact;

function Map() {

  const center = useMemo(() => ({ lat: 44.754130, lng: 20.475230 }), []);

  return <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
    <MarkerF position={center}></MarkerF>
  </GoogleMap>;
}
