import { Member } from "../../../hooks/useGetMembers";

export function Members(mem: Member) {
  return (
    <>
      <div className="mobile:w-40 mobile3:w-48 kindle:w-60 tablet:w-64 desktop:w-72 desktop2:w-80 desktop3:w-96 border border-solid border-primaryGray p-10 ">
        <img src={mem.image} />
      </div>
      <div className="text-center">
        {mem.firstName} {mem.lastName}
      </div>
      <div className="text-center text-primaryBlue">{mem.lastName}</div>
    </>
  );
}
