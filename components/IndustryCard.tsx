"use client"

import React from "react";
import { create } from 'zustand'
import ChatInterface from "./chat/ChatInterface";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/hooks/use-user-store"; // <-- CHANGED: Import the shared store


interface IndustryCardProps {
    icon: string;
    name: string;
    description: string;
    chatAgentKey: string;
    status: boolean;
}


interface StoreState {
    aiChatUsername: string;
    aiChatUserMobile: string;
    setAIChatUsername: (name: string) => void;
    setAIChatUserMobile: (mobile: string) => void;
}

const useStore = create<StoreState>((set) => ({
    aiChatUsername: "",
    aiChatUserMobile: "",
    setAIChatUsername: (name: string) => set({ aiChatUsername: name }),
    setAIChatUserMobile: (mobile: string) => set({ aiChatUserMobile: mobile })
}))

const IndustryCard: React.FC<IndustryCardProps> = ({
    icon,
    name,
    description,
    chatAgentKey,
    status,
}) => {
    const [open, setOpen] = React.useState(false);
    const { aiChatUsername, aiChatUserMobile, setAIChatUsername, setAIChatUserMobile } = useUserStore();
    const [showRegistration, setShowRegistration] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false); // <-- NEW: Add loading state

    const handleOpen = () => {
        if (!status) return;
        // Check if we need to show the registration form when the modal opens
        if (!aiChatUsername || !aiChatUserMobile) {
            setShowRegistration(true);
        } else {
            setShowRegistration(false);
        }
        setOpen(true);
    };

    const handleLeadSubmit = async () => {
        setIsSubmitting(true);

        const nameParts = aiChatUsername.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '(From AI Demo)';

        const leadData = {
            firstName: firstName,
            lastName: lastName,
            email: `${aiChatUserMobile}@lead.vasifytech.com`, // Placeholder email
            phone: aiChatUserMobile,
            company: 'N/A - From AI Agent Page Demo',
            service: name, // The name of the industry card clicked
            message: `User started a demo for the "${name}" AI Agent on the AI Agent page.`,
        };

        try {
            await fetch("https://backend.vasifytech.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(leadData),
            });
            console.log("Lead from AI Agent page submitted:", leadData);
        } catch (error) {
            console.error("Failed to submit lead:", error);
        } finally {
            setIsSubmitting(false);
            setShowRegistration(false); // Proceed to chat
        }
    };

    return (
        <>
            <div
                className={`group ${status ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={handleOpen}
                tabIndex={0}
                role="button"
                aria-label={`Open chat for ${name}`}
            >
                <div
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-4xl mb-4">{icon}</div>
                    <div className="absolute top-2 right-2 flex items-center gap-1">

                        <Avatar className="h-6 w-6">
                            <AvatarImage src="/bot-avatar.png" alt="AI Agent" className={status ? 'opacity-100 size-6' : 'opacity-50'} />
                            <AvatarFallback className={status ? 'text-green-500' : 'text-gray-400'}>AI</AvatarFallback>
                        </Avatar>
                        <span className={`text-s ${status ? 'text-green-500' : 'text-gray-400'}`}>
                            {status ? 'Live' : 'Coming Soon'}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
            </div>

            {status && <Dialog open={open} onOpenChange={setOpen}>

                <DialogContent className="sm:max-w-[500px] h-[600px] max-h-[80vh] p-0" hideCloseButton>
                    {showRegistration ? (
                        <div className="p-6 space-y-4">
                            <h2 className="text-lg font-bold">Please enter your details</h2>

                            <Input
                                placeholder="Your Name"
                                value={aiChatUsername}
                                onChange={(e) => setAIChatUsername(e.target.value)}
                            />

                            <PhoneInput
                                country={'in'}
                                value={aiChatUserMobile}
                                onChange={(phone) => setAIChatUserMobile(phone)}
                                inputClass="!w-full !h-10 !text-base !rounded-md !border-input !px-3 !py-2 !bg-background"
                                containerClass="!w-full"
                                buttonClass="!border-input !bg-background paddin-x-3"
                            />
                            <Button
                                className="w-full"
                                onClick={handleLeadSubmit}
                                disabled={!aiChatUsername || !aiChatUserMobile || isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Continue"}
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => setOpen(false)}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                        </div>
                    ) : (
                        <ChatInterface
                            title={name}
                            chatAgentKey={chatAgentKey}
                            onClose={() => setOpen(false)}
                            userName={aiChatUsername}
                            userMobile={aiChatUserMobile}
                        />
                    )}
                </DialogContent>
            </Dialog>}
        </>
    );
};

export default IndustryCard;