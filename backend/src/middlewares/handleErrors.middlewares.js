import { HttpCodes } from "../utils/HTTPCodes.util";

const handleErrors = (error, req, res) => {
	res.status(error.status | HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
		status: error.status | HttpCodes.CODE_INTERNAL_SERVER_ERROR,
		response: error.message,
	});
};

export default handleErrors;