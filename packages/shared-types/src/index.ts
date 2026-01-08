export interface ChatMessage {
    id: number
    roomId: number
    content: string
    sender: {
        id: number
        username: string
    }
    createdAt: string
}

export type ChatRoomType =
    | "public"
    | "private"
    | "direct"
    | "temporary"


export interface ApiResponse<T> {
    data: T
}

export interface PingResponse {
    message: string
}
