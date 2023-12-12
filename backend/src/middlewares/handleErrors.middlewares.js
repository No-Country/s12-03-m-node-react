import { HttpCodes } from "../utils/HTTPCodes.util.js";

const handleErrors = (error, req, res, next) => {
	console.log('ERROR => ', error);
	res.status(error.status || HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
		status: error.status || HttpCodes.CODE_INTERNAL_SERVER_ERROR,
		response: error.message,
	});
};

export default handleErrors;