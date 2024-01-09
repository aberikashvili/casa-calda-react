import {
  Title1,
  Title2,
  DescriptionBox,
  CoverBox,
  Description,
  CertificateBox,
  TeamBox,
} from "./StAboutUs.styled";
import { useEffect } from "react";
import { Certificate } from "./components/Certificates";
import { useGetMembers } from "../../hooks/useGetMembers";
import { Slider } from "../../components/Slider";

export default function AboutUS() {
  const { getMemberData } = useGetMembers();

  useEffect(() => {
    getMemberData();
  }, [getMemberData]);

  //     if (isLoading || Loading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="bg-primaryWhite">
      <Title1 className="mobile:text-sm2 tablet:text-md tablet2:text-lg desktop:text-xl desktop3:text-xxl">
        თქვენი საიმედო პარტნიორი{" "}
      </Title1>
      <Title2 className="text-primaryBlue mobile:text-sm tablet:text-sm  desktop:text-sm2 desktop3:text-md">
        კომპანია „თბილი სახლი”
      </Title2>
      <div>
        <DescriptionBox className="bg-primaryBlue ">
          <CoverBox />
          <Description>
            <p className="text-primaryWhite pb-6 font-light">
              ჩვენთან შეძენილი პროდუქცია მომხმარებელს სათანადო სერვისის
              მეშვეობით ხანგრძლივი, მრავალწლიანი პერიოდის განმავლობაში შეუქმნის
              ჯანსაღ და კომფორტულ გარემოს. კომპანია „თბილი სახლი“2001 წლიდან
              ფუნქციონირებს და მას მნიშვნელოვანი ადგილი უკავია ჩვენი ქვეყნის
              სამომხმარებლო ბაზარზე.
            </p>
            <p className="text-primaryWhite pb-6 font-light">
              კომპანია საქმიანობას სახალხო მეურნეობის დარგების მრავალი
              მიმართულებით ახორციელებს. „თბილი სახლი“ ევროპის, აზიისა და
              ამერიკის კონტინენტზე მოქმედი ცნობილი კომპანიების საიმედო
              პარტნიორია და კლიენტებს სთავაზობს, როგორც ხარისხიანი პროდუქციის
              ასორტიმენტის სტანდარტულ მოდელებს, ასევე ინდივიდუალური, სპეციფიური
              დაკვეთით დამზადებული პროდუქციის მოწოდებას უმოკლეს დროში.
            </p>
            <p className="text-primaryWhite pb-6 font-light">
              კომპანიაში მუშაობს გამოცდილი და მაღალი კვალიფიკაციის მქონე
              თანამშრომლების გუნდი, რაც ჩვენი წარმატებული საქმიანობისა და
              პროფესიონალიზმის უტყუარი დადასტურებაა. ამასთან, საინჟინრო
              კომუნიკაციების სპეციალისტები პერიოდულად გადიან სტაჟირებას პარტნიორ
              უცხოურ კომპანიებში და გააჩნიათ სათანადო ლიცენზია/ნებართვა მათ მიერ
              წარმოებული პროდუქციის ინსტალაციაზე და მომსახურებაზე დაშვების.
            </p>
          </Description>
        </DescriptionBox>
      </div>
      <CertificateBox>
        <h2 className="text-4xl font-bold">ჯილდოები,სიგელები</h2>
        <div className="flex">
          <Certificate />
        </div>
      </CertificateBox>
      <TeamBox>
        <h2 className="text-4xl font-bold">ჩვენი გუნდი</h2>
        <Slider itemsPerSlide={4} />
      </TeamBox>
    </div>
  );
}
