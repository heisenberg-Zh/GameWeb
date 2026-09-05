"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Play } from "lucide-react";
import { siteConfig } from "@/lib/site";

type VideoId = keyof typeof siteConfig.videos;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, parameters: Record<string, string>) {
  window.gtag?.("event", eventName, parameters);
}

function VideoPreview({ videoKey, onPlay }: { videoKey: VideoId; onPlay: () => void }) {
  const video = siteConfig.videos[videoKey];

  return (
    <button
      className="video-preview"
      type="button"
      onClick={onPlay}
      aria-label={`Play ${video.title}`}
    >
      <img src={video.thumbnail} alt={`${video.title} thumbnail`} loading="lazy" />
      <span className="video-play" aria-hidden="true"><Play size={20} fill="currentColor" /></span>
      <span className="video-duration">{video.duration}</span>
    </button>
  );
}

function VideoEmbed({ videoKey }: { videoKey: VideoId }) {
  const video = siteConfig.videos[videoKey];

  return (
    <iframe
      className="video-embed"
      src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
      title={video.title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoId | null>(null);
  const trailer = siteConfig.videos.trailer;
  const steamTrailer = siteConfig.videos.steamTrailer;

  const activateVideo = (videoKey: VideoId) => {
    setActiveVideo(videoKey);
    track("video_open", {
      video_id: siteConfig.videos[videoKey].id,
      video_title: siteConfig.videos[videoKey].title,
      video_provider: "youtube"
    });
  };

  const openYoutube = (videoKey: VideoId) => {
    track("video_open", {
      video_id: siteConfig.videos[videoKey].id,
      video_title: siteConfig.videos[videoKey].title,
      video_provider: "youtube_external"
    });
  };

  return (
    <section className="section video-section" aria-labelledby="official-media-title">
      <div className="section-heading">
        <div><p className="eyebrow">Official media</p><h2 id="official-media-title">See it in action</h2></div>
        <p>Watch the developer&apos;s trailers, then use the field manual to turn the public systems into a practical opening plan.</p>
      </div>
      <div className="video-showcase">
        <div className="video-feature">
          {activeVideo === "trailer" ? <VideoEmbed videoKey="trailer" /> : <VideoPreview videoKey="trailer" onPlay={() => activateVideo("trailer")} />}
          <div className="video-feature-copy">
            <div><span className="video-kicker">RtsDimon / 2025</span><h3>{trailer.title}</h3></div>
            <a
              className="text-link"
              href={`https://www.youtube.com/watch?v=${trailer.id}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => openYoutube("trailer")}
            >Watch on YouTube <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="video-side">
          <div className="video-card">
            {activeVideo === "steamTrailer" ? <VideoEmbed videoKey="steamTrailer" /> : <VideoPreview videoKey="steamTrailer" onPlay={() => activateVideo("steamTrailer")} />}
            <div className="video-card-copy"><span className="video-kicker">Steam trailer / 0:45</span><h3>{steamTrailer.title}</h3><a className="text-link" href={`https://www.youtube.com/watch?v=${steamTrailer.id}`} target="_blank" rel="noreferrer" onClick={() => openYoutube("steamTrailer")}>Open video <ExternalLink size={13} /></a></div>
          </div>
          <div className="video-cta">
            <p>Ready for the field manual?</p>
            <div className="hero-actions">
              <Link className="button" href="/guides/dust-front-rts-beginner-guide" onClick={() => track("guide_cta_click", { location: "video_showcase", guide: "beginner" })}>Read beginner guide</Link>
              <a className="button secondary" href={siteConfig.steamUrl} target="_blank" rel="noreferrer" onClick={() => track("steam_outbound_click", { location: "video_showcase" })}>Open Steam <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </div>
      <p className="video-source">Videos by <a href={siteConfig.youtubeChannelUrl} target="_blank" rel="noreferrer">RtsDimon</a>. The wiki links to official media and does not rehost video files.</p>
    </section>
  );
}
