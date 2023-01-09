import { Router } from "express";
import { getSearchClick } from "../controllers/searchController.js";
import { getSearchId } from "../controllers/searchController.js";

const routeSearch = Router();

routeSearch.get('/search/:id', getSearchClick);
routeSearch.get('/user/:id', getSearchId);

export default routeSearch;