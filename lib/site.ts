export const siteConfig = {
  name: "Dust Front RTS Wiki",
  shortName: "Dust Front RTS",
  description:
    "Dust Front RTS Wiki with beginner guides, factions, units, economy, base building, build orders, campaign systems, demo tips, and difficulty strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dustfront.openlink.net.cn",
  steamUrl: "https://store.steampowered.com/app/2610770/Dust_Front_RTS/",
  demoUrl: "https://store.steampowered.com/app/4776100/Dust_Front_RTS_Demo/",
  communityUrl: "https://steamcommunity.com/app/2610770/",
  discussionsUrl: "https://steamcommunity.com/app/2610770/discussions/",
  youtubeSearchUrl: "https://www.youtube.com/results?search_query=Dust+Front+RTS+trailer",
  youtubeChannelUrl: "https://www.youtube.com/@rtsdimon4107",
  videos: {
    trailer: {
      id: "GUsOZ6MFEOM",
      title: "DUST FRONT RTS | Trailer 2025",
      duration: "1:36",
      uploadDate: "2025-04-05T10:00:50-07:00",
      thumbnail: "https://i.ytimg.com/vi/GUsOZ6MFEOM/maxresdefault.jpg"
    },
    steamTrailer: {
      id: "SMblnHalvKI",
      title: "DUST FRONT RTS | Steam Trailer",
      duration: "0:45",
      uploadDate: "2023-10-06T10:42:32-07:00",
      thumbnail: "https://i.ytimg.com/vi/SMblnHalvKI/hqdefault.jpg"
    }
  }
};

export const locales = [
  { code: "en", label: "English", localName: "Dust Front RTS" },
  { code: "de", label: "Deutsch", localName: "Dust Front RTS" },
  { code: "es", label: "Espanol", localName: "Dust Front RTS" },
  { code: "fr", label: "Francais", localName: "Dust Front RTS" },
  { code: "zh", label: "中文", localName: "灰烬战争（Dust Front RTS）" }
] as const;
