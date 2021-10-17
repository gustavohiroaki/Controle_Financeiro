import nock from "nock";
import api from "../service/api";

const uri = api.defaults.baseURL as string;
const options = { "Access-Control-Allow-Origin": "*" };

export function checkNocks() {
  return nock.activeMocks();
}

export function clearNocks() {
  return nock.cleanAll();
}

export function nockSuccess(route: string, object: object) {
  return nock(uri).get(route).reply(200, object, options);
}
