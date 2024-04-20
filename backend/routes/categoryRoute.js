import express from "express"
const category_route = express();

import bodyParser from "body-parser";
category_route.use(bodyParser.use());
category_route.use(bodyParser.json())