import { Router } from "express";
import { getSearchClick } from "../controllers/searchClickController.js";

const routeSearch = Router();

routeSearch.get('/search/:id', getSearchClick);

export default routeSearch;