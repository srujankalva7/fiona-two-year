"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Heart,
  MapPin,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { memories, relationship } from "@/data/memories";

export function MemoryExperience() {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const markerRefs = useRef<Map<number, LeafletMarker>>(new Map());
  const [activeId, setActiveId] = useState(memories[0]?.id ?? 0);
  const [mapReady, setMapReady] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);

  const activeIndex = Math.max(
    0,
    memories.findIndex((memory) => memory.id === activeId),
  );
  const activeMemory = memories[activeIndex];
  const progress = memories.length
    ? ((activeIndex + 1) / memories.length) * 100
    : 0;

  const boundsKey = useMemo(
    () => memories.map((memory) => memory.coordinates.join(",")).join("|"),
    [],
  );

  useEffect(() => {
    if (!mapElementRef.current || mapInstanceRef.current || memories.length === 0) {
      return;
    }

    let cancelled = false;
    const markerMap = markerRefs.current;

    async function buildMap() {
      const L = await import("leaflet");
      if (cancelled || !mapElementRef.current) return;

      const map = L.map(mapElementRef.current, {
        zoomControl: false,
        scrollWheelZoom: true,
        attributionControl: true,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const coordinates = memories.map((memory) => memory.coordinates);

      L.polyline(coordinates, {
        color: "#a4444f",
        weight: 3,
        opacity: 0.72,
        dashArray: "3 10",
        lineCap: "round",
      }).addTo(map);

      memories.forEach((memory, index) => {
        const icon = L.divIcon({
          className: "memory-marker-shell",
          html: `<span class="memory-marker"><span>♥</span><b>${index + 1}</b></span>`,
          iconSize: [46, 52],
          iconAnchor: [23, 48],
        });

        const marker = L.marker(memory.coordinates, {
          icon,
          title: memory.title,
          keyboard: true,
        })
          .addTo(map)
          .on("click", () => setActiveId(memory.id));

        markerMap.set(memory.id, marker);
      });

      const bounds = L.latLngBounds(coordinates);
      map.fitBounds(bounds, { padding: [62, 62], maxZoom: 13 });
      mapInstanceRef.current = map;
      setMapReady(true);
    }

    buildMap();

    return () => {
      cancelled = true;
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
      markerMap.clear();
    };
  }, [boundsKey]);

  useEffect(() => {
    if (!mapReady || !activeMemory || !mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo(activeMemory.coordinates, 13, {
      animate: true,
      duration: 1.1,
    });

    markerRefs.current.forEach((marker, id) => {
      const element = marker.getElement();
      element?.classList.toggle("is-active", id === activeMemory.id);
    });
  }, [activeId, activeMemory, mapReady]);

  useEffect(() => {
    if (!isReplaying) return;

    const timer = window.setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = memories.findIndex(
          (memory) => memory.id === currentId,
        );
        const nextIndex = currentIndex + 1;

        if (nextIndex >= memories.length) {
          window.clearInterval(timer);
          setIsReplaying(false);
          return currentId;
        }

        return memories[nextIndex].id;
      });
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isReplaying]);

  function selectMemory(id: number) {
    setIsReplaying(false);
    setActiveId(id);
  }

  function moveMemory(direction: -1 | 1) {
    const nextIndex = Math.min(
      memories.length - 1,
      Math.max(0, activeIndex + direction),
    );
    selectMemory(memories[nextIndex].id);
  }

  function toggleReplay() {
    if (isReplaying) {
      setIsReplaying(false);
      return;
    }

    if (activeIndex === memories.length - 1) {
      setActiveId(memories[0].id);
    }
    setIsReplaying(true);
  }

  if (!activeMemory) {
    return <main className="empty-state">Add your first memory to begin.</main>;
  }

  return (
    <main className="site-shell">
      <div className="paper-grain" aria-hidden="true" />

      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Back to the beginning">
          {relationship.initials}
        </a>
        <p>Our second year</p>
        <span>{relationship.eyebrow}</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            {relationship.eyebrow}
          </p>
          <h1>{relationship.title}</h1>
          <p className="intro">{relationship.introduction}</p>
        </div>

        <button className="replay-button" type="button" onClick={toggleReplay}>
          {isReplaying ? <Pause size={17} /> : <Play size={17} />}
          {isReplaying ? "Pause the journey" : "Replay our year"}
        </button>
      </section>

      <section className="memory-layout" aria-label="Interactive memory map">
        <aside className="timeline-panel" aria-label="Memory timeline">
          <div className="panel-heading">
            <div>
              <span>The timeline</span>
              <h2>{memories.length} moments</h2>
            </div>
            <span className="tiny-heart" aria-hidden="true">♥</span>
          </div>

          <div className="timeline-list">
            {memories.map((memory, index) => (
              <button
                className={`timeline-item ${memory.id === activeId ? "is-active" : ""}`}
                key={memory.id}
                type="button"
                onClick={() => selectMemory(memory.id)}
                aria-current={memory.id === activeId ? "step" : undefined}
              >
                <span className="timeline-date">
                  <b>{memory.month}</b>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </span>
                <span className="timeline-copy">
                  <b>{memory.title}</b>
                  <small>{memory.location}</small>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <div className="map-panel">
          <div className="map-label">
            <MapPin size={15} aria-hidden="true" />
            Click a heart to open a memory
          </div>
          {!mapReady && <div className="map-loading">Unfolding our map…</div>}
          <div className="map-canvas" ref={mapElementRef} />
          <div className="journey-progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <article className="memory-card" aria-live="polite">
          <div className={`memory-photo ${activeMemory.image ? "has-photo" : ""}`}>
            {activeMemory.image ? (
              <img
              src={activeMemory.image}
              alt={`A memory from ${activeMemory.title}`}
              className="memory-photo-image"
              />
            ) : (
              <div className="photo-placeholder">
                <Heart size={30} strokeWidth={1.35} aria-hidden="true" />
                <span>Add your photo</span>
                <small>/public/photos</small>
              </div>
            )}
            <span className="photo-number">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="memory-content">
            <p className="memory-date">
              <CalendarDays size={14} aria-hidden="true" />
              {activeMemory.date}
            </p>
            <h2>{activeMemory.title}</h2>
            <p className="memory-location">
              <MapPin size={14} aria-hidden="true" />
              {activeMemory.location}
            </p>
            <p className="memory-story">{activeMemory.story}</p>
            <blockquote>“{activeMemory.loveNote}”</blockquote>
          </div>

          <div className="memory-navigation">
            <button
              type="button"
              onClick={() => moveMemory(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous memory"
            >
              <ArrowLeft size={17} />
            </button>
            <span>{activeIndex + 1} / {memories.length}</span>
            <button
              type="button"
              onClick={() => moveMemory(1)}
              disabled={activeIndex === memories.length - 1}
              aria-label="Next memory"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </article>
      </section>

      <footer className="closing-note">
        <Heart fill="currentColor" size={18} aria-hidden="true" />
        <p>{relationship.closing}</p>
      </footer>
    </main>
  );
}
