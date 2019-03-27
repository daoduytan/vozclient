import axios from "axios";

import { constant } from "../configs";

export default axios.create({
  baseURL: constant.URL_API
});
