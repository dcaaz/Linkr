import { Router } from "express";
import { getSearchClick } from "../controllers/searchClickController.js";

const routeSearch = Router();

routeSearch.get('/searchClick', getSearchClick);

export default routeSearch;