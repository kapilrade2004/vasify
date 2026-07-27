import { ChatRequest, ChatResponse } from "@/lib/types";

export async function sendMessageToN8n(payload: ChatRequest): Promise<ChatResponse> {
  const { message, chatAgentKey, userName, userMobile } = payload;

  let n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/visa-ai-agent";

  switch (chatAgentKey) {
    case "travel-hospitality":
      n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/travel-and-hospitality";
      break;
    case "real-estate":
      n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/real-estate-aastha";
      break;
    case "education":
      n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/education-ai-agent";
      break;
    case "bfsi":
      n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/banking-ai-agent";
      break;
    case "healthcare":
      n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/healthcare-ai-agent";
      break;
    default:
      n8nWebhookUrl = "https://n8n.vasifytech.com/webhook/api/visa-ai-agent";
  }

  const response = await fetch(n8nWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: "api",
      messageId: `${Date.now()}:1`,
      from: "+919769026133",
      event: "message_received",
      contacts: {
        profileName: userName,
        recipient: userMobile,
      },
      messages: {
        type: "text",
        text: {
          body: message,
        },
        timestamp: Date.now(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const aiResponse = await response.json();
  return {
    response: aiResponse.output || aiResponse.response || "No response received",
  };
}
