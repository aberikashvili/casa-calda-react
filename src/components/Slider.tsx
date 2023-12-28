// import { Carousel } from "react-responsive-carousel";
import { useGetMembers } from "../hooks/useGetMembers";
import { Members } from "../pages/AboutUs/components/Members";
// import { Member } from "../hooks/useGetMembers";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";



interface MembersSliderProps {
  itemsPerSlide: number;
}

export function Slider({ itemsPerSlide }: MembersSliderProps)  {

    const { members, startIndex, setStartIndex } = useGetMembers();  

    const visibleMembers = members.slice(startIndex, startIndex + itemsPerSlide);
    
    const handleNextClick = () => {
    setStartIndex(startIndex + itemsPerSlide);
  };
    
    const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerSlide));
  };
    
    return (
        <>
            <div className="flex flex-row-reverse">
                <button onClick={handleNextClick} disabled={startIndex + itemsPerSlide >= members.length}>
        <FaArrowRightLong color={"#141414"}  size={24}/>
             </button>
               <button className="pr-8" onClick={handlePrevClick} disabled={startIndex === 0}>
                    <FaArrowLeftLong color={"#CDCECE"} size={24} />
                </button>

              
            </div>
      <div className="flex">

        
        {visibleMembers.map(member => (
          <div className="p-3">< Members key={member.image} {...member} /> </div>
        ))}
          
      {/* <Carousel
        infiniteLoop={true}
        autoPlay={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}   
        interval={3000}
      >
        {members.map((member: Member) => (
            <div className="p-3">< Members key={member.image} {...member} /> </div>
            ))}
      </Carousel> */}
            </div>
            </>
  );
}