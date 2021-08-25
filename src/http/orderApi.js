import { $authHost } from "./index"

export const create = async (json) => {
    const {data} = await $authHost.post("/api/order/", json)
    return data
}

export const fetchAllOrder = async () => {
    const {data} = await $authHost.get("/api/order/")
    return data
}

export const fetchOneOrder = async (id) => {
    const {data} = await $authHost.get("/api/order/" + id)
    return data
}