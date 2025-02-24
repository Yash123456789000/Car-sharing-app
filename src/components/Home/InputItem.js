'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SourceContext } from '../../context/SourceContext'
import { DestinationContext } from '../../context/DestinationContext'


const InputItem = ({type}) => {
    const [value, setValue] = useState(null);
    const [placeholder, setPlacehoder] = useState(null);
    const {source, setSource} = useContext(SourceContext);
    const {destination, setDestination} = useContext(DestinationContext);
    useEffect(()=>{
      type=='source'?setPlacehoder('Pickup Location'):setPlacehoder('DropOff Location')
    },[])
    
    const getLatAndLng=(place,type)=>{
      const placeId=place.value.place_id;
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({placeId},(place,status)=>{
        if(status === 'OK' && place.geometry && place.geometry.location){
          console.log(place.geometry.location.lat(),place.geometry.location.lng());
          if(type=='source'){
              setSource({
                lat:place.geometry.location.lat(),
                lng:place.geometry.location.lng(),
                name: place.formatted_address,
                label: place.name
              })
          }else{
            setDestination({
              lat:place.geometry.location.lat(),
              lng:place.geometry.location.lng(),
              name: place.formatted_address,
              label: place.name
            })
          }
        }
      })
    }
  return (
    <div className='bg-slate-200 p-5 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={type=='source'?'/source.webp':'/dest.png'} width={15} height={15} alt='logo'/>
        {/* <input type='text' placeholder={type=='source'?'Pickup Location':'DropOff Location'} className='bg-transparent w-full outline-none'/> */}
        <GooglePlacesAutocomplete
            selectProps={{
                value,
                onChange: (place)=>{getLatAndLng(place,type);
                  setValue(place)
                },
                placeholder: placeholder,
                isClearable: true,
                className:'w-full',
                components:{
                  DropdownIndicator: false
                },
                styles:{
                  control: (provided) => ({
                    ...provided,
                    color: 'blue',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })
                }
            }}
        />
    </div>
  )
}

export default InputItem