import { Member } from "../../../hooks/useGetMembers"

export function Members(mem: Member) {
    return (
        <>
        <div className="h-96 w-96 border border-solid border-primaryGray p-10 ">
            <img src={mem.image} /> 
        </div>
            <div className="text-center">{mem.firstName}  {mem.lastName}</div>
            <div className="text-center text-primaryBlue">{ mem.lastName}</div>
         </>
    )
}