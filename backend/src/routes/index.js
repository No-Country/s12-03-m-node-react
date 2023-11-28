import sessionRoutes from './session.routes.js'
import Router from 'express'

const router = Router();

router.use('/session', sessionRoutes)


// router.get("/", (_, res) => {
//     res.json({
//       message: "Hello world",
//     });
//   });
  
//   app.use("/", router);

export default router;