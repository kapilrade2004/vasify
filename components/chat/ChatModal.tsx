"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import ChatInterface from "./ChatInterface";

interface ChatModalProps {
    buttonText?: string;
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    buttonIcon?: boolean;
    title?: string;
    chatAgentKey: string; // Add this
    userName: string;      // Add this
    userMobile: string;    // Add this

}

const ChatModal: React.FC<ChatModalProps> = ({
    buttonText = "Chat with AI",
    buttonVariant = "default",
    buttonIcon = true,
    title = "AI Assistant",
    chatAgentKey,
    userName,
    userMobile

}) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={buttonVariant} className="gap-2">
                    {buttonIcon && <MessageSquare className="w-4 h-4" />}
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] h-[600px] p-0">
                <ChatInterface
                    title={title}
                    onClose={() => setOpen(false)}
                    chatAgentKey={chatAgentKey}
                    userName={userName}
                    userMobile={userMobile}
                />
            </DialogContent>
        </Dialog>
    );
};

export default ChatModal;