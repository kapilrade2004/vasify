import { useState } from "react";
import { ChatMessage } from "@/lib/types";
import { sendMessageToN8n } from "@/services/chatService";

export function useChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string, chatAgentKey: string, userName: string, userMobile: string) => {
    setError(null);
    
    // Add user message immediately
    const userMessage: ChatMessage = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    
    setIsLoading(true);
    
    try {
      const data = await sendMessageToN8n({
        message: content,
        chatAgentKey: chatAgentKey,
        userName: userName,
        userMobile: userMobile,
        history: messages
      });
      
      // Add AI response to messages
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (err) {
      console.error("Error in chat:", err);
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setError(null);
  };

  return { messages, isLoading, error, sendMessage, resetChat };
}