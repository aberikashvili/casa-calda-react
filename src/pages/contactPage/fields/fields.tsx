import { SubmitHandler, useForm } from "react-hook-form";
import {
  Btn_active,
  FieldesInput,
  InputContainer,
  Label,
} from "../../../componenets/styled_components";

interface IFormInput {
  fullName: string;
  phoneNumber: number;
  mail: string;
  text: string;
}

export function Fields() {
  const { register, watch, handleSubmit } = useForm<IFormInput>();
  let watchData = watch();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white-rgba s:w-[91vw] s:mx-auto md2:w-[53.4vw] lg1:w-[56vw] "
    >
      <div className="s:w-[91vw] s:mx-auto s:px-[23px] s:pt-[43px] md2:w-[41.1vw] md2:pt-[0px] md2:ml-[7.3vw] md2:mt-[81px] lg1:w-[37.7vw] lg1:ml-[5.5vw] h-[540px] flex flex-col gap-[80px]">
        <InputContainer>
          <FieldesInput
            className={`absolute s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  ${
              watchData.fullName ? "filledInput" : ""
            }`}
            {...register("fullName", { required: true })}
          />
          <Label
            className={`absolute s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  ${
              watchData.fullName ? "filledLabel" : ""
            }`}
          >
            სახელი და გვარი
          </Label>
          <hr className="absolute s:w-[80vw] z-20 top-[36px] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw] " />
        </InputContainer>
        <InputContainer>
          <FieldesInput
            className={`absolute  s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  ${
              watchData.phoneNumber ? "filledInput" : ""
            }`}
            {...register("phoneNumber", { required: true })}
          />
          <Label
            className={`absolute s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  ${
              watchData.phoneNumber ? "filledLabel" : ""
            }`}
          >
            ტელეფონის ნომერი
          </Label>
          <hr className="absolute s:w-[80vw] z-20 top-[36px] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw] " />
        </InputContainer>
        <InputContainer >
          <FieldesInput
            className={`absolute s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  ${
              watchData.mail ? "filledInput" : ""
            }`}
            {...register("mail", { required: true })}
          />
          <Label
            className={`absolute s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  ${
              watchData.mail ? "filledLabel" : ""
            }`}
          >
            ელ.ფოსტა
          </Label>
          <hr className="absolute s:w-[80vw] z-20 top-[36px] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw] " />
        </InputContainer>
        <div className="flex flex-col s:w-[80vw] md2:w-[38vw] lg1:w-[27vw] lg1:ml-[8.2vw]  h-[128px]">
          <textarea
            className="h-[128px] outline-none text-[14px] font-[600] leading-[21px] text-black-rgba placeholder:text-blackText-rgba placeholder:font-[400] placeholder:leading-[21px] placeholder:text-[14px]"
            placeholder=" გასაგზავნი შეტყობინების ტექსტი"
            {...register("text", { required: true })}
          />
          <hr />
        </div>
        <Btn_active
          className="sendBtn mt-[-42px] md2: self-end  w-[152px]"
          type="submit"
        >
          გაგზავნა
        </Btn_active>
      </div>
    </form>
  );
}
