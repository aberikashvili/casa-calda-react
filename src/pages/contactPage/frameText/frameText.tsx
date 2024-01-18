import { useTranslation } from "react-i18next";

export function FrameText() {
  const { t } = useTranslation();
  const fildsLabel = t("contactPage.frameTexts", { returnObjects: true }) as {
    labels: Record<string, string>;
    infos: Record<string, string>;
  };
  const labels = Object.values(fildsLabel.labels || {}).flatMap(Object.values);
  const infos = Object.values(fildsLabel.infos || {}).flatMap(Object.values);
  return (
    <div className="flex flex-col text-white-rgba w-full s:gap-[21.5px] md2:gap-[1.3vh] lg1:gap-[1.36vh] s:pl-[6.4vw] md2:pl-[2.8vw] lg1:pl-[3.65vw] s:pt-[25px] md2:pt-[204px] lg1:pt-[205px]">
      {labels.map((label, index) => (
        <div key={index}>
          <h3 className="text-[12px] font-[500] leading-[18px]">{label}</h3>
          <p className="font-avenirBold text-[14px] leading-[21px]">
            {infos[index]}
          </p>
        </div>
      ))}
    </div>
  );
}
