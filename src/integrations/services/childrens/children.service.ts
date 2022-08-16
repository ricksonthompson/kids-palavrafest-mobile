import { api } from "../../../integrations/api";
import { ChildrenResponse } from "./responses/children.response";

export const getAllChildrens = (url: string): Promise<{ items: ChildrenResponse[], total: number }> => {
  return new Promise((resolve, reject) => {
    api.get<{ items: ChildrenResponse[], total: number }>(url).then(response => {
      resolve(response.data)
    }).catch((error: any)=> reject(error));
  })
}