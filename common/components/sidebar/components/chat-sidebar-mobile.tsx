"use client";

import { Plus, MessageSquare, Menu } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { ScrollArea } from "@/common/components/ui/scroll-area";
import { cn } from "@/common/lib/utils";
import Link from "next/link";
import { UserProfile } from "./user-profile";
import NextImage from "next/image";
import { IMAGES } from "@/common/constant/images";

interface Chat {
  id: string;
  title: string;
  updatedAt: Date;
}

interface ChatSidebarMobileProps {
  chats: Chat[];
  isActive: (chatId: string) => boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onChatClick: (sessionId: string) => void;
  loading?: boolean;
  hasMore?: boolean;
  lastSessionRef?: React.RefObject<HTMLButtonElement | null>;
}

export function ChatSidebarMobile({
  chats,
  isActive,
  isOpen,
  onToggle,
  onClose,
  onChatClick,
  loading = false,
  lastSessionRef,
}: ChatSidebarMobileProps) {
  return (
    <>
      {/* Top Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 z-50 flex items-center justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-slate-800"
          onClick={onToggle}
        >
          <Menu className="h-5 w-5 text-slate-200" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-md">
            <NextImage
              src={IMAGES.logo}
              alt="Logo"
              width={50}
              height={50}
              className="size-full object-contain rounded-lg"
            />
          </div>

          <span className="font-semibold text-base tracking-tight text-slate-100">
            Tool Calling Assistant
          </span>
        </div>

        <Link href="/chat">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 hover:bg-slate-800"
          >
            <Plus className="h-5 w-5 text-indigo-300" />
          </Button>
        </Link>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 w-64 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800 z-50",
          "flex flex-col transition-transform duration-300 ease-in-out md:hidden shadow-2xl",
          "top-14 bottom-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* New Chat */}
        <div className="p-3">
          <Link href="/chat?new=true" onClick={onClose}>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2.5 h-9 px-3 hover:bg-slate-800 transition-colors"
            >
              <Plus className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-slate-200">
                New Chat
              </span>
            </Button>
          </Link>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-hidden min-h-0">
          <div className="px-3 py-3">
            <h2 className="text-xs font-semibold text-slate-400 px-2 uppercase tracking-wide">
              Your chats
            </h2>
          </div>

          <ScrollArea className="flex-1 px-2 pb-4 h-full">
            <div className="space-y-0.5 px-1 min-h-0">
              {chats.map((chat, index) => (
                <button
                  key={chat.id}
                  ref={index === chats.length - 1 ? lastSessionRef : undefined}
                  onClick={() => onChatClick(chat.id)}
                  className={cn(
                    "w-full rounded-lg px-3 py-2.5 text-left transition-all",
                    "group relative flex items-center gap-2.5 text-sm",
                    isActive(chat.id)
                      ? "bg-indigo-600/20 text-indigo-200"
                      : "hover:bg-slate-800 text-slate-300 hover:text-white",
                  )}
                >
                  <MessageSquare className="h-4 w-4 shrink-0 opacity-70" />

                  <span className="line-clamp-1 flex-1 font-normal truncate">
                    {chat.title.length > 30
                      ? `${chat.title.substring(0, 30)}...`
                      : chat.title}
                  </span>
                </button>
              ))}

              {loading && (
                <div className="px-3 py-2 text-sm text-slate-400">
                  Loading more chats...
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* User Profile */}
        <div className="border-t border-slate-800 p-3">
          <UserProfile isCollapsed={false} />
        </div>
      </aside>
    </>
  );
}
