import { useTranslation } from "react-i18next";

export function HeadlineTexts() {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-rgba  flex flex-col items-center text-center s:pt-[17px] md2:pt-[100px]  sm:px-[20px] s:h-[500px]  md:h-[574px] ">
      <h2 className="sm:text-[24px] md:text-[36px] font-avenirBold  leading-[54px] text-black-rgba">
        {t("contactPage.headlineTexts.title")}
      </h2>
      <p className="s:hidden md2:flex mt-[20px] text-[14px] font-avenirMedium leading-[21px] text-blackText-rgba"
         dangerouslySetInnerHTML={{ __html: t("contactPage.headlineTexts.subTitle") }}
      />
      <p className="md2:hidden  break-word whitespace-normal text-[14px] font-avenirNormal leading-[21px]  text-blackText-rgba "
         dangerouslySetInnerHTML={{ __html: t("contactPage.headlineTexts.subtitle2") }}
      />
      <p className="md2:hidden  break-word whitespace-normal text-[14px] font-avenirNormal leading-[21px]  text-blackText-rgba ">
        {t("contactPage.headlineTexts.subTitle3")}
      </p>
    </div>
  );
}
