export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatRequest {
  message: string;
  history: ChatMessage[];
    chatAgentKey: string;
  userName: string;
  userMobile: string;

}

export interface ChatResponse {
  response: string;
}