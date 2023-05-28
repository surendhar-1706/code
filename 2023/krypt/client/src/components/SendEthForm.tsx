"use client";
import { accountAtom } from "@/atoms/app-atoms";
import { sendEthFormType } from "@/types/formtypes";
import { useAtom } from "jotai";
import { useForm, SubmitHandler } from "react-hook-form";

type sendEthFormProps = {
  sendTransaction: (formData: sendEthFormType) => Promise<string | undefined>;
};

export default function SendEthForm({ sendTransaction }: sendEthFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<sendEthFormType>();
  const onSubmit: SubmitHandler<sendEthFormType> = async (data) => {
    console.log(data);
    const res = await sendTransaction(data);
    console.log(res);
  };

  return (
    <form
      className="flex flex-col px-10 py-8 bg-white text-black rounded-lg shadow-lg w-80 bg-opacity-20 backdrop-filter backdrop-blur-lg border-opacity-10 gap-y-8 placeholder:text-xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="outline-none rounded border-[0.2px] py-1 px-2 placeholder:text-xs placeholder:text-gray-300"
        placeholder="Address to"
        defaultValue=""
        {...register("toAddress", { required: false })}
      />
      <input
        className="outline-none rounded border-[0.2px] py-1 px-2 placeholder:text-xs placeholder:text-gray-300"
        placeholder="Amount Eth"
        defaultValue={""}
        type="number"
        step={0.0001}
        {...register("ethAmount", { required: false })}
      />
      <input
        className="outline-none rounded border-[0.2px] py-1 px-2 placeholder:text-xs placeholder:text-gray-300"
        placeholder="Keyworld (Gif)"
        defaultValue=""
        {...register("gifKeyword", { required: false })}
      />
      <input
        className="outline-none rounded border-[0.2px] py-1 px-2 placeholder:text-xs placeholder:text-gray-300"
        placeholder="Enter Message"
        defaultValue=""
        {...register("message", { required: false })}
      />
      <button
        className="py-2 text-white transition-colors duration-300 bg-teal-400 border ease-intext-xs hover:bg-teal-500 rounded-xl"
        type="submit"
      >
        Send Now
      </button>
    </form>
  );
}
