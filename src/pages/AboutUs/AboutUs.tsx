import {Title1,Title2,DescriptionBox,CoverBox,Description,CertificateBox,TeamBox } from "./StAboutUs.styled"
import { useEffect } from "react";
import { useGetCertificates } from "../../hooks/useGetCertificates";
import { Product } from "../../hooks/useGetCertificates";
import { Member } from "../../hooks/useGetMembers";
import { Certificate } from "./components/Certificates";
import { Members } from "./components/Members";
import { useGetMembers } from "../../hooks/useGetMembers";

export default function AboutUS() {
    const { products,getData,} = useGetCertificates();
    const { members, getMemberData, } = useGetMembers();

    useEffect(() => {
    getData();
    getMemberData();
    }, [getData, getMemberData]);
    
//     if (isLoading || Loading) {
//     return <div>Loading...</div>;
//   }
    
    return (
        <div>
            {/* {(isLoading ) ?(
                <div>... loading</div>
            ) : ( */}
                <div className="bg-primaryWhite">
                    <Title1 >თქვენი საიმედო პარტნიორი </Title1>
                    <Title2 className="text-primaryBlue">კომპანია „თბილი სახლი”</Title2>
                   <DescriptionBox className="bg-primaryBlue relative">
                        <CoverBox className="absolute"/>
                        <Description>
                            <p className="text-primaryWhite pb-6 font-light">ჩვენთან შეძენილი პროდუქცია მომხმარებელს სათანადო სერვისის მეშვეობით ხანგრძლივი, მრავალწლიანი პერიოდის განმავლობაში შეუქმნის ჯანსაღ და კომფორტულ გარემოს.
                                კომპანია „თბილი სახლი“2001 წლიდან ფუნქციონირებს და მას მნიშვნელოვანი ადგილი უკავია ჩვენი ქვეყნის სამომხმარებლო ბაზარზე.</p>
                            <p className="text-primaryWhite pb-6 font-light">კომპანია საქმიანობას სახალხო მეურნეობის დარგების მრავალი მიმართულებით ახორციელებს.
                                „თბილი სახლი“ ევროპის, აზიისა და ამერიკის კონტინენტზე მოქმედი ცნობილი კომპანიების საიმედო პარტნიორია და კლიენტებს სთავაზობს, როგორც ხარისხიანი პროდუქციის ასორტიმენტის სტანდარტულ მოდელებს, ასევე ინდივიდუალური, სპეციფიური დაკვეთით დამზადებული პროდუქციის მოწოდებას უმოკლეს დროში.</p>
                            <p className="text-primaryWhite pb-6 font-light">კომპანიაში მუშაობს გამოცდილი და მაღალი კვალიფიკაციის მქონე თანამშრომლების გუნდი, რაც ჩვენი წარმატებული საქმიანობისა და პროფესიონალიზმის უტყუარი დადასტურებაა. ამასთან, საინჟინრო კომუნიკაციების სპეციალისტები პერიოდულად გადიან სტაჟირებას პარტნიორ უცხოურ კომპანიებში და გააჩნიათ სათანადო ლიცენზია/ნებართვა მათ მიერ წარმოებული პროდუქციის ინსტალაციაზე და მომსახურებაზე დაშვების.</p>
                        </Description>
                    </DescriptionBox>
                    
                    <CertificateBox>
                        <h2 className="text-4xl font-bold">ჯილდოები,სიგელები</h2>
                        <div className="flex flex-wrap ">{products.map((product: Product) => (
                            <div className="p-3">< Certificate key={product.id} {...product} /> </div>
                        ))}</div>
                    </CertificateBox>
                    <TeamBox>
                        <h2 className="text-4xl font-bold">ჩვენი გუნდი</h2>
                        <div className="flex flex-wrap ">{members.map((member: Member) => (
                            <div className="p-3">< Members key={member.id} {...member} /> </div>
                        ))}</div>
                    </TeamBox>
                </div>
            {/* )}  */}
            </div>
    )
}