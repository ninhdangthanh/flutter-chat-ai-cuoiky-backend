import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index.routes.js"

const app = express();


// middleware
app.use(helmet());
app.use(morgan("dev"));
// app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', routes);


export default app;
