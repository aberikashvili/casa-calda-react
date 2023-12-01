import { useState,useEffect } from "react";
import axios from "axios";

export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
}

export interface UseGetMembersOptions {
  itemsPerPage: number;
}

export function useGetMembers() {
    const [members, setMembers] = useState<Member[]>([]);
    // const [Loading, setLoading] = useState<boolean>(false);

    
    async function getMemberData() {
        // setLoading(true)
        try {
           const resp = await axios.get("https://dummyjson.com/users?limit=4");
           setMembers(resp.data.users)
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
        // setLoading(false);
      
    }
    console.log(members)
   useEffect(() => {
    getMemberData();
}, []);

    return {
        members,
        setMembers,
        getMemberData,
        // Loading,
    }
}