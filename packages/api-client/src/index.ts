import type { PingResponse } from "@chat/shared-types"

const API_BASE =
    typeof window === "undefined"
        ? process.env.API_BASE
        : import.meta.env.VITE_API_BASE

export async function ping(): Promise<PingResponse> {
    return await $fetch<PingResponse>(`${API_BASE}/ping`)
}
