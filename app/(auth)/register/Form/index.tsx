"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUserAction } from "./actions/send.action";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

export type RegisterFormInputs = {
  username: string;
  password: string;
  email: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const res = await registerUserAction(data);
    } catch (e) {
      let error = e as { message: string };
      alert(error.message);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username")}
        placeholder="Username"
        className="text-lg text-black"
      ></input>
      <input
        {...register("password")}
        placeholder="Password"
        className="text-lg text-black"
      ></input>
      <input
        {...register("email")}
        placeholder="Email"
        className="text-lg text-black"
      ></input>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
