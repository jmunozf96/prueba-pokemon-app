import http from "../app/http-common";
import {AxiosResponse} from "axios";
import {IPokemonRest} from "../features/pokemon/interfaces";

const getAll = (): Promise<AxiosResponse<IPokemonRest[]>> => {
    return http.get<IPokemonRest[]>("/?idAuthor=1");
};
const get = (id: number) => {
    return http.get(`/${id}`);
};
const create = (data: Partial<IPokemonRest>) => {
    return http.post("/?idAuthor=1", data);
};
const update = (id: number, data: Partial<IPokemonRest>) => {
    return http.put(`/${id}`, data);
};
const remove = (id: number) => {
    return http.delete(`/${id}`);
};

export const PokemonHttpService = {
    getAll, get, create, update, remove
};
