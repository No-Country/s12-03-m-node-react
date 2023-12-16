import passport from 'passport';
import { HttpCodes } from '../utils/HTTPCodes.util.js';
import { removeTempFiles } from '../utils/fsDelete.js';


const jwtAuth = (strategy, options = {}) =>{
    return async(req, res, next) =>{
        await passport.authenticate(strategy, {session: false, ...options},
            (error, user, info) => {
            if(error){
                if (req.files && req.files.pet_img) removeTempFiles(req.files.pet_img)
                return next(error)
            }
            if(!user){
                if (req.files && req.files.pet_img) removeTempFiles(req.files.pet_img)
                return res.status(HttpCodes.CODE_UNAUTHORIZED).send({error: info?.messages ?? `${info}`})
            }
            req.user = user
            next()
        })(req, res, next)
    }
}


export default jwtAuth;

