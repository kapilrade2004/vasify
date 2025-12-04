"use client";

import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatMessages } from "@/hooks/useChatMessages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReactMarkdown from "react-markdown";

interface ChatInterfaceProps {
  title: string;
  chatAgentKey: string;
  userName: string;
  userMobile: string;
  onClose?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  title,
  chatAgentKey,
  userName,
  userMobile,
  onClose,
}) => {
  const { messages, isLoading, sendMessage, error } = useChatMessages();
  const [inputValue, setInputValue] = React.useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    if (!isLoading) inputRef.current?.focus();
  }, [messages, isLoading]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue, chatAgentKey, userName, userMobile);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg overflow-hidden shadow-lg">

      {/* HEADER */}
      <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            Start a conversation by sending a message
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 max-w-[85%] ${
              message.role === "user" ? "ml-auto flex-row-reverse" : ""
            }`}
          >
            {/* Avatar */}
            <Avatar className="h-8 w-8 shadow-sm">
              <AvatarImage
                src={
                  message.role === "user"
                    ? "/user-avatar.png"
                    : "/bot-avatar.png"
                }
              />
              <AvatarFallback>
                {message.role === "user" ? "U" : "AI"}
              </AvatarFallback>
            </Avatar>

            {/* Message Bubble */}
            <div
              className={`rounded-xl px-4 py-3 text-sm shadow-sm whitespace-pre-wrap leading-relaxed border ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground border-primary/20"
                  : "bg-white border-gray-200"
              }`}
            >
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        {/* TYPING INDICATOR */}
        {isLoading && (
          <div className="flex items-start gap-2 max-w-[85%]">
            <Avatar className="h-8 w-8">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>

            <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 bg-white border-t flex gap-2"
      >
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message…"
          disabled={isLoading}
          className="flex-1"
        />
        <Button disabled={!inputValue.trim() || isLoading} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;