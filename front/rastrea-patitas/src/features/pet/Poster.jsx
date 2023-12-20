/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logos/logo_RastreaPatitas.svg";
import { Chip } from "@nextui-org/react";
import { LiaFileDownloadSolid } from "react-icons/lia";
import Share from "../blog/Share";
import { useLocation, useNavigate } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { useUserContext } from "../../context/useUserContext";

const Poster = () => {
	const [isPrinting, setIsPrinting] = useState(false);
	const navigate = useNavigate()
	const { user } = useUserContext();


	const petData = useLocation().state.pet
	const alertData = useLocation().state.alert
	const newAlert = { ...petData, ...alertData }

	console.log(newAlert)

	const printPoster = () => {
		setIsPrinting(true);
		setTimeout(() => {
			window.print();
			setIsPrinting(false);
			navigate("/home")
		}, 100);
	}

	return (
		<div className='w-[360px] md:w-screen bg-[url("/src/assets/bg-patitas.svg")] flex flex-col items-center justify-center mb-2'>
			<div className="bg-[#9087CA] w-screen flex justify-center items-center py-5">
				<h1 className="text-3xl font-bold text-white">{newAlert.status}</h1>
			</div>

			<h3 className="text-3xl font-bold pb-3 pt-3">{newAlert.name}</h3>
			<div className="flex items-center justify-between w-[360px] gap-2 ml-2">
				<img src={newAlert.pet_img[0]?.url} alt="pet1" className="w-32 h-32 md:w-60 md:h-60" />

				<div className="flex flex-col gap-2">
					<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
						<FaCalendarAlt className="w-6 h-6" />
						<p className="text-[14px] md:text-xl">Notificado el {formatDate(newAlert.createdAt)}</p>
					</div>
					<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
						<GiPositionMarker className="w-6 h-6" />
						<p className="text-[14px] md:text-xl">San Martin de los Andes</p>
					</div>
					<img src={newAlert.qr.url} alt="qr" className="w-20 h-20 md:w-44 md:h-44" />
				</div>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 mb-10 bg-slate-100 p-4 md:w-[550px]">
				<div className="flex flex-col items-start justify-center w-[230px] md:w-auto gap-2">
					<h5 className="text-xl md:text-2xl font-bold text-center">Características</h5>
					<hr className="w-full" />
					<p className="md:text-xl">
						Especie: <Chip className="md:text-xl">{newAlert.species.toLowerCase()}</Chip>
					</p>
					<span className="md:text-xl">
						Edad: 1-2 años <Chip className="md:text-xl">{newAlert.age.toLowerCase()}</Chip>
					</span>
					<p className="md:text-xl">Sexo: <Chip className="md:text-xl">{newAlert.sex.toLowerCase()}</Chip></p>
					<span className="md:text-xl">
						Tamaño*: 25 - 40 cm <Chip className="md:text-xl">{newAlert.size}</Chip>
					</span>
					<p className="md:text-xl">Color: <Chip className="md:text-xl">{newAlert.main_color.toLowerCase()}</Chip></p>
					<p>* De acuerdo a la longitud que hay desde las patas hasta el lomo</p>

					<h5 className="text-xl md:text-2xl font-bold text-center">Descripción</h5>
					<hr className="w-full" />
					<p>{newAlert.alert_description}</p>

					<h5 className="text-xl md:text-2xl font-bold text-center">Contacto</h5>
					<hr className="w-full" />

					<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
						<MdAccountCircle className="w-6 h-6" />
						<p className="md:text-xl">{user?.full_name}</p>
					</div>
					<div className="flex justify-left gap-2 w-[250px] md:w-[350px]">
						<FaPhoneAlt className="w-6 h-6" />
						<p className="md:text-xl">{user?.phone}</p>
					</div>
				</div>
			</div>
			<img src={logo} alt="logo" className="w-60 h-14" />
			<p className="text-[#887C7C]">Encuentra a tu mascota</p>

			{!isPrinting &&
				<>
					<div className="rounded-lg flex items-center justify-between w-[300px] gap-2 mx-4 px-2 shadow-sm shadow-outline shadow-offset-xs hover:shadow-lg bg-white cursor-pointer font-bold mt-14">
						<p className="font-lato text-sm leading-4 text-[#37474F]">Exportar</p>
						<LiaFileDownloadSolid onClick={printPoster} className="w-6 h-6" />
					</div>
					<div className="rounded-lg flex items-center justify-between w-[300px] gap-2 mx-4 px-2 shadow-sm shadow-outline shadow-offset-xs hover:shadow-lg bg-white cursor-pointer font-bold">
						<p className="font-lato text-sm leading-4 text-[#37474F]">Compartir</p><Share page={'poster'} />
					</div>
				</>
			}
		</div>
	);
};

export default Poster;
