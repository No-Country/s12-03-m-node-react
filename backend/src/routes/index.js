import express from 'express';

const app = express();
const router = express.Router();

router.get("/", (_, res) => {
    res.json({
      message: "Hello world",
    });
  });
  
  app.use("/", router);

  export default app;