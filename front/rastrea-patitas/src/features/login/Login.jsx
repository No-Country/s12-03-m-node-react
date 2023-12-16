/* eslint-disable no-unused-vars */
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { useUserContext } from "../../context/useUserContext";

import Cookie from "js-cookie";

const Login = () => {
	const [isVisible, setIsVisible] = useState(false)
	const { handleSubmit, register, formState: { errors }, setError } = useForm()
	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}
	const navigate = useNavigate()

	const onSubmit = handleSubmit(async (data) => {
		try {
			const response = await login(data)
			console.log(response)
		} catch (error) {
			console.log(error)
		}

	})

	const onGoogleClick = async () => {
		const user = await loginWithGoogle()
		console.log(user)
	}

	const onFacebookClick = async () => {
		const user = await loginWithFacebook()
		console.log(user)
	}

	return (
		<div className='md:bg-[url("/src/assets/bg-patitas.svg")] md:bg-repeat w-screen h-screen md:flex flex-col justify-center items-center'>
			<form
				onSubmit={onSubmit}
				className="flex flex-col items-center w-[360px] md:w-[544px] m-1 gap-4 bg-[url('/src/assets/bg-patitas.svg')] bg-cover bg-fondo p-10">
				<h1 className="text-xl">Inicia Sesión</h1>
				<h3 className="text-sm pb-8">Ingresa tu email y contraseña</h3>

				<Input
					type="email"
					label="Email"
					placeholder="Ingresa tu email"
					variant="underlined"
					color="secondary"
					{...register("email", {
						required: "El campo email es requerido",
						pattern: {
							value: /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
							message: "Ingresa un email valido",
						},
					})}
				/>

				<p className="text-red-500 text-sm">{errors.email?.message}</p>

				<Input
					type={isVisible ? "text" : "password"}
					label="Contraseña"
					placeholder="Ingresa tu contraseña"
					variant="underlined"
					color="secondary"
					endContent={
						<button type="button" onClick={toggleVisibility} className="focus-outline-none">
							{isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
						</button>
					}
					{...register("password", {
						required: "El campo contraseña es requerido",
						minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" },
						maxLength: { value: 50, message: "La contraseña debe tener como maximo 50 caracteres" },
					})}
				/>
				<p className="text-red-500 text-sm">{errors.password?.message}</p>

				<p className="text-sm underline text-gray-500 cursor-pointer pr-36">Olvidé mi contraseña</p>

				{loading ? (
					<Button disabled isLoading color="primary" variant="ghost" className="w-[255px] mt-10">
						cargando...
					</Button>
				) : (
					<Button type="submit" color="primary" variant="ghost" className="w-[255px] mt-10">
						Iniciar Sesión
					</Button>
				)}

				<h3 className="text-sm pb-8">
					¿No tenés cuenta?{" "}
					<span onClick={() => navigate("/register")} className="underline cursor-pointer">
						Registrate aquí
					</span>
				</h3>
			</form>
		</div>
	);
};

export default Login;
