import { HttpCodes } from "../utils/HTTPCodes.util.js";
import { removeTempFiles } from "../utils/fsDelete.js";

const handleErrors = (error, req, res, next) => {
	console.log('ERROR => ', error);

	if (req.files && req.files.pet_img) removeTempFiles(req.files.pet_img)
	
	res.status(error.status || HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
		status: error.status || HttpCodes.CODE_INTERNAL_SERVER_ERROR,
		response: error.message || "Error interno del servidor",
	});

	
};

export default handleErrors;