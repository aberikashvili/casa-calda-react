import { useTranslation } from "react-i18next";
import { WorkCard } from "./workCard";

export function OurWorkPage() {
  const { t } = useTranslation();
  const workCardContent = t("ourWorkPage.workCardContent", { returnObjects: true }) as {
    titles: Record<string, Record<string, string>>;
    links: Record<string, { linkTitle: string }[]>;
  };

  const titles = Object.values(workCardContent.titles || {}).flatMap(
    Object.values
  );
  const links = Object.values(workCardContent.links || {}).flatMap(
    Object.values
  );

  return (
    <div className="w-full h-full s:pl-[18px] lgg:pl-[160px] s:pt-5 lgg:pt-[96px] bg-white-rgba">
      <div className="s:w-[90vw] md1:max-w-[40vw]">
        <h2 className="font-avenirBold s:text-[24px] lgg:text-[36px] s:leading-[36px] lgg:leading-[54px] text-black-rgba">
          {t("ourWorkPage.titles.ourWork")}{t("ragaca")}
        </h2>
        <p className="font-avenirNormal text-[14px] leading-[21px] text-blackText-rgba lgg:mt-[20px]">
          {t("ourWorkPage.descriptions.ourWork")}
        </p>
      </div>
      <div className="w-full h-full flex flex-col s:items-center md2:grid s:justify-center sm1-grid-rows-3 md1:grid-rows-2 s:gap-y-[15px] s:w-[90vw] md2:grid-cols-2 lgg:grid-cols-3 lg1:grid-cols-4 s:mt-[23px] md1:mt-[38px] md2:pb-[204px] lg1:max-w-[80vw] lg1:gap-x-[4.4vw] lg:gap-y-[37px]">
        {titles.map((title, index) => (
          <WorkCard
            key={index}
            title={title}
            index={index}
            links={links[index]}
          />
        ))}
      </div>
    </div>
  );
}
