import { CarListData } from '../../utils/CarListData'
import React, { useContext, useState } from 'react'
import CarListItem from './CarListItem'
import { useRouter } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"
import { FareUpdateContext } from '../../context/FareUpdateContext';
import { toast } from "sonner"

  

const CarListOptions = ({distance}) => {
    const [active, setActive]=useState();
    const [selectedCar, setSelectedCar]=useState([]);
    const router=useRouter();
    const {fareUpdated, setFareUpdated} = useContext(FareUpdateContext)

    const FareUpdateFunction =()=>{
        setFareUpdated(true);
        toast("You Fare has been updated to", {
            description: `${(selectedCar.amount*distance/2).toFixed(2)}`,
            action: {
              label: "OK",
              onClick: () => console.log("Ok"),
            },
          })
        router.push('/payment?amount='+(selectedCar.amount*distance/2).toFixed(2))
    }
  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
        <h2 className='text-[22px] font-bold'>Recommended</h2>
        {CarListData.map((item, index)=>(
            <div className={`cursor-pointer p-2 rounded-md border-black px-4 ${active==index?'border-[3px]':null}`} onClick={()=>{setActive(index); setSelectedCar(item)}}>
                <CarListItem car={item} distance={distance}/>
            </div>
        ))}

        {selectedCar?.name? <div className='flex justify-between fixed bottom-5 rounded-lg bg-white p-3 shadow-xl w-full sm:z-50 md:z-50 sm:ml-[-44px] md:w-[30%] border-[1px] items-center'>
            <h2>Make Payment For</h2>
            {/* <button className='p-3 bg-black text-white rounded-lg text-center' onClick={()=>router.push('/payment?amount='+(selectedCar.amount*distance).toFixed(2))}>Request {selectedCar.name}</button> */}
            <AlertDialog>
                <AlertDialogTrigger><button className='p-3 bg-black text-white rounded-lg text-center'>Request {selectedCar.name}</button></AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Do you want to share your ride?</AlertDialogTitle>
                    <AlertDialogDescription>
                        There is a available passenger to your destination. The fare will be splitted accordingly.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel onClick={()=>router.push('/payment?amount='+(selectedCar.amount*distance).toFixed(2))}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={FareUpdateFunction}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>: null}

        
    </div>
  )
}

export default CarListOptions