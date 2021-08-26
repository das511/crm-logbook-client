import { $authHost } from "./index"

export const createGuideRow = async (guide, json) => {
    const {data} = await $authHost.post("/api/" + guide + "/", json)
    return data
}

export const fetchAll = async (guide) => {
    const {data} = await $authHost.get("/api/" + guide + "/")
    return data
}

export const fetchOne = async (guide, id) => {
    const {data} = await $authHost.get("/api/" + guide + "/" + id)
    return data
}