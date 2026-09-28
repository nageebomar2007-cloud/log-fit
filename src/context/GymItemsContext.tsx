"use client";
import { IGymItem } from "@/types/gymType";


import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";


export type ListType = "todayPlans" | "saveLater";
interface IGymItemsContextType {
  todayPlans: IGymItem[];
  setTodayPlans: React.Dispatch<React.SetStateAction<IGymItem[]>>;

  saveLater: IGymItem[];
  setSaveLater: React.Dispatch<React.SetStateAction<IGymItem[]>>;

  addToTodayPlan: (item: IGymItem) => boolean;
  saveForLater: (item: IGymItem) => boolean;

  markAsDone: (id: number, listType: ListType) => void;
  removePlan: (id: number, listType: ListType) => void;

  hydrated: boolean;
}
export const GymItemsContext = createContext<IGymItemsContextType>(
  {} as IGymItemsContextType,
);

const GymItemsProvider = ({children}:{children: ReactNode;}) => {
 
  const [todayPlans, setTodayPlans] =
    useState<IGymItem[]>([]);

    const[saveLater,setSaveLater]=useState<IGymItem[]>([]);

    const[hydrated,setHydrated]=useState(false);

   useEffect(() =>{
    try {
      const storedToday =
        localStorage.getItem(
          "fitlog-today-plans",
        );

        let storedSaved = localStorage.getItem(
            "fitlog-saved"
        );

         if (!storedSaved) {
        storedSaved =
          localStorage.getItem(
            "fitlog-save-later",
          );
      }

      if (storedToday) {
        setTodayPlans(
            JSON.parse(storedToday)
        )
      }

 if (storedSaved) {
        setSaveLater(
          JSON.parse(storedSaved),
        );
      }
    } catch (error){
     console.error(
        "Failed to load FitLog data:",
        error,
      );
    } finally{
         setHydrated(true);
    }
    },[]);

useEffect(()=>{
     if (!hydrated) return;

    localStorage.setItem(
      "fitlog-today-plans",
      JSON.stringify(todayPlans),
    );
},[todayPlans,hydrated]);

 useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saveLater),
    );
  }, [saveLater, hydrated]);

   const addToTodayPlan=(
    item:IGymItem
   ):boolean=>{
    if (todayPlans.length>=5) {
      return false
    }
        const alreadyExists =
      todayPlans.some(
        (plan) =>
          String(plan.id) ===
          String(item.id),
      );
      if (alreadyExists) {
        return false
      }

      setTodayPlans((prev)=>[
        ...prev,
        {
            ...item,
            isDone:false
        }
      ])
      return true

   }

const saveForLater =(
    item:IGymItem
):boolean =>{
  if (saveLater.length>=5) {
    return false
  }
     const alreadyExists =
      saveLater.some(
        (plan) =>
          String(plan.id) ===
          String(item.id),
      );

    if (alreadyExists) {
      return false;
    }

    setSaveLater((prev) => [
      ...prev,
      {
        ...item,
        isDone: false,
      },
    ]);

    return true;
}

const markAsDone=(
    id:number,listType:ListType
)=>{
if (listType==="todayPlans") {
    setTodayPlans((prev)=>prev.map((item)=>String(item.id)===String(id)?
    {
                ...item,
                isDone: !item.isDone,
              }:item))
}

else {
      setSaveLater((prev) =>
        prev.map((item) =>
          String(item.id) === String(id)
            ? {
                ...item,
                isDone: !item.isDone,
              }
            : item,
        ),
      );
    }

    


} 

const removePlan =(
    id:number,listType:ListType

)=>{
if (listType === "todayPlans") {
     setTodayPlans((prev) =>
        prev.filter(
          (item) =>
            String(item.id) !==
            String(id),
        ),
      );
}
else {
    setSaveLater((prev) =>
        prev.filter(
          (item) =>
            String(item.id) !==
            String(id),
        ),
      );
}}

return(
    <GymItemsContext.Provider value={{
            todayPlans,
            setTodayPlans,
            saveLater,
            setSaveLater,
            addToTodayPlan,
        saveForLater,

        markAsDone,
        removePlan,

        hydrated
        }}
        > 
     {children}
    </GymItemsContext.Provider>
)
 
  }

export default GymItemsProvider;
