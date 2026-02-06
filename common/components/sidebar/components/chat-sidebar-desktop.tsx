"use client";

import { Plus, MessageSquare, PanelLeft } from "lucide-react";
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

interface ChatSidebarDesktopProps {
  chats: Chat[];
  isActive: (chatId: string) => boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onChatClick: (sessionId: string) => void;
  loading?: boolean;
  lastSessionRef?: React.RefObject<HTMLButtonElement | null>;
}

export function ChatSidebarDesktop({
  chats,
  isActive,
  isCollapsed,
  onToggleCollapse,
  onChatClick,
  loading = false,
  lastSessionRef,
}: ChatSidebarDesktopProps) {
  /* COLLAPSED SIDEBAR */
  if (isCollapsed) {
    return (
      <aside
        className={cn(
          "hidden md:flex flex-col bg-white/80 backdrop-blur-xl border-r border-purple-200 h-screen sticky top-0 shrink-0 transition-all duration-300 ease-in-out",
          "w-16",
        )}
      >
        <div
          className="relative p-3 flex justify-center group cursor-pointer"
          onClick={onToggleCollapse}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-md">
            <NextImage
              src={IMAGES.logo}
              alt="Logo"
              width={50}
              height={50}
              className="size-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-lg">
            <PanelLeft className="w-5 h-5 text-purple-600" />
          </div>
        </div>

        <div className="px-2 pb-2">
          <Link href="/chat">
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-10 bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              <Plus className="h-5 w-5 text-purple-600" />
            </Button>
          </Link>
        </div>

        <div className="mt-auto p-3 flex justify-center">
          <UserProfile isCollapsed={true} />
        </div>
      </aside>
    );
  }

  /* FULL SIDEBAR */
  return (
    <aside
      className={cn(
        "hidden md:flex flex-col bg-white/80 backdrop-blur-xl border-r border-purple-200 h-screen sticky top-0 shrink-0 transition-all duration-300 ease-in-out",
        "w-64",
      )}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-2.5 px-2 py-1.5 mb-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-md">
            <NextImage
              src={IMAGES.logo}
              alt="Logo"
              width={50}
              height={50}
              className="size-full object-contain rounded-lg"
            />
          </div>

          <span className="font-semibold text-base tracking-tight flex-1 text-gray-900">
            Tool Calling Assistant
          </span>

          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 hover:bg-purple-100"
            onClick={onToggleCollapse}
          >
            <PanelLeft className="h-4 w-4 rotate-180 text-purple-600" />
          </Button>
        </div>

        {/* New Chat */}
        <Link href="/chat?new=true">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2.5 h-9 px-3 hover:bg-purple-50 transition-colors"
          >
            <Plus className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-800">New Chat</span>
          </Button>
        </Link>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-hidden min-h-0">
        <div className="px-3 py-3">
          <h2 className="text-xs font-semibold text-purple-400 px-2 uppercase tracking-wide">
            Your chats
          </h2>
        </div>

        <ScrollArea className="flex-1 px-2 pb-4 h-full">
          <div className="space-y-0.5 px-1 min-h-0 mb-8">
            {chats.map((chat, index) => (
              <button
                key={chat.id}
                ref={index === chats.length - 1 ? lastSessionRef : undefined}
                onClick={() => onChatClick(chat.id)}
                className={cn(
                  "w-full rounded-lg px-3 py-2.5 text-left transition-all",
                  "group relative flex items-center gap-2.5 text-sm",
                  isActive(chat.id)
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : "hover:bg-purple-50 text-gray-700 hover:text-gray-900",
                )}
              >
                <MessageSquare className="h-4 w-4 shrink-0 opacity-70" />

                <span className="line-clamp-1 flex-1 font-normal truncate">
                  {chat.title.length > 23
                    ? `${chat.title.substring(0, 23)}...`
                    : chat.title}
                </span>
              </button>
            ))}

            {loading && (
              <div className="px-3 py-2 text-sm text-purple-400">
                Loading more chats...
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* User */}
      <div className="border-t border-purple-200 p-3">
        <UserProfile isCollapsed={false} />
      </div>
    </aside>
  );
}
