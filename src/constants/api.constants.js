import {axiosInstance} from "./axios.constants";

export const getData = async (index) => axiosInstance.get(`character/?page=${index}`);