import {
  BookOpen,
  Lightbulb,
  Code,
  MessageSquare,
  Trophy,
  TrendingUp,
  CloudSun,
} from "lucide-react";

export const CHAT_SUGGESTIONS = [
  {
    icon: Lightbulb,
    title: "Brainstorm ideas",
    description: "for a new project",
  },
  {
    icon: Code,
    title: "Help me debug",
    description: "my code issue",
  },
  {
    icon: MessageSquare,
    title: "Write a message",
    description: "for any occasion",
  },
  {
    icon: BookOpen,
    title: "Explain a concept",
    description: "in simple terms",
  },

  // NEW ONES 👇

  {
    icon: Trophy, // good for F1 / sports
    title: "Latest F1 updates",
    description: "race results and standings",
  },
  {
    icon: TrendingUp,
    title: "Stock market insights",
    description: "latest trends and analysis",
  },
  {
    icon: CloudSun,
    title: "Check weather forecast",
    description: "for any city or location",
  },
];
