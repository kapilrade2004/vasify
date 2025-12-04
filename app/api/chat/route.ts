import { NextRequest, NextResponse } from "next/server";
import { ChatRequest, ChatResponse } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ChatRequest;
    const { message, history, chatAgentKey,userName, userMobile } = body;

    // Validate inputs
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // This is where you would integrate with n8n webhooks
    // Instead of implementing this now, we'll add placeholders

    // TODO: Replace with actual n8n webhook URL
    let N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "https://n8n.vasifytech.com/webhook/api/visa-ai-agent";

    switch (chatAgentKey) {
      case "travel-hospitality":
        N8N_WEBHOOK_URL = "https://n8n.vasifytech.com/webhook/api/travel-and-hospitality";
        break;
      case "real-estate":
        N8N_WEBHOOK_URL = "https://n8n.vasifytech.com/webhook/api/real-estate-aastha";
        break;
      case "education":
        N8N_WEBHOOK_URL = "https://n8n.vasifytech.com/webhook/api/education-ai-agent";
        break;
      case "bfsi":
        N8N_WEBHOOK_URL = "https://n8n.vasifytech.com/webhook/api/banking-ai-agent";
        break;
      case "healthcare":
        N8N_WEBHOOK_URL = "https://n8n.vasifytech.com/webhook/api/healthcare-ai-agent";
        break;
      default:
        N8N_WEBHOOK_URL = "https://n8n.vasifytech.com/webhook/api/visa-ai-agent";
    }


    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
          {
            "channel": "api",
            "messageId": "58d44605-d6ba-4477-b6f7-ecdf10d810d9:1",
            "from": "+919769026133",
            "event": "message_received",
            "contacts": {
              "profileName": userName,
              "recipient": userMobile,
            },
            "messages": {
              "type": "text",
              "text": {
                "body": message,
              },
              "timestamp": new Date().getTime(),
            }
          }
      ),
    });
    
    // Simulate a delay for the response
    // await new Promise(resolve => setTimeout(resolve, 100));
    
    // Placeholder response (replace with actual n8n response)
    // const aiResponse = `This is a simulated response to: "${chatAgentKey}". Replace this with your n8n webhook integration.`;
    const aiResponse = await n8nResponse.json();
    // console.log(aiResponse.output);
    return NextResponse.json({
      response: aiResponse.output
    } as ChatResponse);

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}