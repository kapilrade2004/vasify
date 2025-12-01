/**
 * This is an example file demonstrating how to integrate with n8n webhooks.
 * 
 * In n8n:
 * 1. Create a new workflow
 * 2. Add a Webhook node as the trigger
 * 3. Configure it to receive POST requests
 * 4. Add your AI processing nodes (e.g., OpenAI, Hugging Face, etc.)
 * 5. Return the response in a format that includes the AI's reply
 * 
 * Then update the API route with your actual webhook URL
 */

export interface N8nChatRequest {
  message: string;
  history: Array<{
    role: string;
    content: string;
  }>;
}

export interface N8nChatResponse {
  response: string;
}

// Example n8n webhook call
export async function callN8nWebhook(message: string, history: any[]): Promise<string> {
  const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
  
  if (!N8N_WEBHOOK_URL) {
    throw new Error("N8N_WEBHOOK_URL environment variable is not set");
  }
  
  const response = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history
    } as N8nChatRequest),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json() as N8nChatResponse;
  return data.response;
}