"use client";

import { createContext, useContext, useState, useEffect } from "react";

const defaultInteractions = [
  { type: "Meetup", icon: "🤝", person: "Tom Baker", date: "March 29, 2026", timestamp: 1774742400000 },
  { type: "Text", icon: "/text.png", isImage: true, person: "Sarah Chen", date: "March 28, 2026", timestamp: 1774656000000 },
  { type: "Meetup", icon: "🤝", person: "Olivia Martinez", date: "March 26, 2026", timestamp: 1774483200000 },
  { type: "Video", icon: "/video.png", isImage: true, person: "Aisha Patel", date: "March 23, 2026", timestamp: 1774224000000 },
  { type: "Meetup", icon: "🤝", person: "Sarah Chen", date: "March 21, 2026", timestamp: 1774051200000 },
  { type: "Call", icon: "/call.png", isImage: true, person: "Marcus Johnson", date: "March 19, 2026", timestamp: 1773878400000 },
  { type: "Meetup", icon: "🤝", person: "Aisha Patel", date: "March 17, 2026", timestamp: 1773705600000 },
  { type: "Text", icon: "/text.png", isImage: true, person: "Olivia Martinez", date: "March 13, 2026", timestamp: 1773360000000 },
  { type: "Call", icon: "/call.png", isImage: true, person: "Lisa Nakamura", date: "March 11, 2026", timestamp: 1773187200000 },
  { type: "Call", icon: "/call.png", isImage: true, person: "Sarah Chen", date: "March 11, 2026", timestamp: 1773187200000 },
  { type: "Video", icon: "/video.png", isImage: true, person: "Marcus Johnson", date: "March 6, 2026", timestamp: 1772755200000 },
  { type: "Video", icon: "/video.png", isImage: true, person: "Ryan O'Brien", date: "February 24, 2026", timestamp: 1771804800000 },
];

const InteractionContext = createContext();

export function InteractionProvider({ children }) {
  const [interactions, setInteractions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("kinkeeper_interactions");
    if (stored) {
      setInteractions(JSON.parse(stored));
    } else {
      setInteractions(defaultInteractions);
      localStorage.setItem("kinkeeper_interactions", JSON.stringify(defaultInteractions));
    }
    setIsLoaded(true);
  }, []);

  const addInteraction = (interaction) => {
    const updated = [interaction, ...interactions].sort((a, b) => b.timestamp - a.timestamp);
    setInteractions(updated);
    localStorage.setItem("kinkeeper_interactions", JSON.stringify(updated));
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction, isLoaded }}>
      {children}
    </InteractionContext.Provider>
  );
}

export function useInteractions() {
  return useContext(InteractionContext);
}