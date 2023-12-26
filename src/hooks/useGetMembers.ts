import { useState,useEffect } from "react";
import axios from "axios";

export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
}
export interface MembersSliderProps {
  itemsPerSlide: number;
}

export function useGetMembers() {
    const [members, setMembers] = useState<Member[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    // const [currentSlide, setCurrentSlide] = useState<number>(1);
    // const [totalSlides, setTotalSlides] = useState<number>(1);

    // const [Loading, setLoading] = useState<boolean>(false);
  

    
    async function getMemberData() {
        // setLoading(true)
        try {
           const resp = await axios.get("https://dummyjson.com/users?limit=10");
            setMembers(resp.data.users);
            // setCurrentSlide(resp.data.skip / resp.data.limit + 1)
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
        // setLoading(false);
      
    }
    console.log(members)
   useEffect(() => {
    getMemberData();
}, [startIndex]);

    return {
        members,
        setMembers,
        getMemberData,
        // Loading,
        startIndex,
        setStartIndex,
    }
}