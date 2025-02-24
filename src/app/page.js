"use client"
import Header from "../components/Header";
import GoogleMapSection from "../components/Home/GoogleMapSection";
import SearchSection from "../components/Home/SearchSection";
import { DestinationContext } from "../context/DestinationContext";
import { SourceContext } from "../context/SourceContext";
import { LoadScript, LoadScriptNext } from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";
import { FareUpdateContext } from "../context/FareUpdateContext";



export default function Home() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  
  return (
    <SourceContext.Provider value={{source, setSource}}>
      <DestinationContext.Provider value={{destination, setDestination}}>
        
        <LoadScriptNext libraries={['places']} googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
          <Header/>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <SearchSection />
          </div>
          <div className="col-span-2">
            <GoogleMapSection />
          </div>
        </div> 
        </LoadScriptNext>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
