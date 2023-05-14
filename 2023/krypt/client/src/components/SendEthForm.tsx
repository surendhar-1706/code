"use client";
import { useForm, SubmitHandler } from "react-hook-form";

export default function SendEthForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<sendEthFormType>();
  const onSubmit: SubmitHandler<sendEthFormType> = (data) => console.log(data);

  console.log(watch("gifKeyword")); // watch input value by passing the name of it

  return (
    <form
      className="flex flex-col rounded-lg w-52"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="border"
        placeholder="Address to"
        defaultValue=""
        {...register("toAddress")}
      />
      <input
        className="border"
        placeholder="Amount Eth"
        defaultValue=""
        {...register("ethAmount")}
      />
      <input
        className="border"
        placeholder="Keyworld (Gif)"
        defaultValue=""
        {...register("gifKeyword")}
      />
      <input
        className="border"
        placeholder="Enter Message"
        defaultValue=""
        {...register("message")}
      />
      <button className="border" type="submit">
        Send Now
      </button>
    </form>
  );
}
