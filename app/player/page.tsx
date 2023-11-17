"use client";
import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import styles from "./player.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FaRandom } from "react-icons/fa";
import { TiArrowLoop } from "react-icons/ti";
import { FaPause } from "react-icons/fa6";

const spotifyApi = new SpotifyWebApi();

const Page = () => {
  const [token, setToken] = useState("");
  const [trackInfo, setTrackInfo] = useState({
    name: "",
    artist: "",
    duration: 0,
    progress: 0,
    imageUrl: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    if (!storedToken) {
      window.location.href = "http://localhost:3000/";
    } else {
      setToken(storedToken);
      spotifyApi.setAccessToken(storedToken);
      getNowPlaying();
    }
  }, []);

  const getNowPlaying = async () => {
    try {
      const response = await spotifyApi.getMyCurrentPlaybackState();
      if (!response.item) {
        return;
      }
      const { name, artists, album } = response.item;
      const duration_ms = response.item.duration_ms || 0;
      const { progress_ms } = response;
      const artistNames = artists.map((artist) => artist.name).join(", ");
      const imageUrl = album.images[0].url;
      setTrackInfo({
        name,
        artist: artistNames,
        duration: duration_ms,
        progress: progress_ms || 0,
        imageUrl,
      });

      // Schedule the next update
      setTimeout(getNowPlaying, 1000);
    } catch (error) {
      console.error("Error fetching now playing:", error);
    }
  };

  const playPauseTrack = async () => {
    try {
      const playbackState = await spotifyApi.getMyCurrentPlaybackState();
      const isPlaying = playbackState.is_playing;

      if (isPlaying) {
        await spotifyApi.pause();
      } else {
        await spotifyApi.play();
      }

      // Update the now playing information
      getNowPlaying();
    } catch (error) {
      console.error("Error toggling play/pause:", error);
    }
  };

  const nextTrack = async () => {
    try {
      await spotifyApi.skipToNext();

      // Update the now playing information
      getNowPlaying();
    } catch (error) {
      console.error("Error skipping to the next track:", error);
    }
  };

  const previousTrack = async () => {
    try {
      await spotifyApi.skipToPrevious();

      // Update the now playing information
      getNowPlaying();
    } catch (error) {
      console.error("Error skipping to the previous track:", error);
    }
  };

  return (
    <div className={styles.main}>
      <h3>Now Playing</h3>
      <img
        className={styles.mainimage}
        src={trackInfo.imageUrl}
        alt="Album cover"
      />
      <h3>{trackInfo.name}</h3>
      <p>{trackInfo.artist}</p>
      <div className={styles.slider}>
        <p>{msToMinutesAndSeconds(trackInfo.progress)}</p>
        <input
          type="range"
          min="0"
          max={trackInfo.duration}
          value={trackInfo.progress}
          readOnly // Make the input readOnly
        />
        <p>{msToMinutesAndSeconds(trackInfo.duration)}</p>
      </div>
      <div className={styles.icons}>
        <TiArrowLoop className={styles.loopicon} onClick={nextTrack} />
        <CgPlayTrackPrev className={styles.previcon} onClick={previousTrack} />
        <div className={styles.card} onClick={playPauseTrack}>
          <BsFillPlayFill className={styles.playicon} />
        </div>
        <CgPlayTrackNext className={styles.nexticon} onClick={nextTrack} />
        <FaRandom className={styles.shuffleicon} />
      </div>
    </div>
  );
};

// Helper function to convert milliseconds to minutes and seconds
const msToMinutesAndSeconds = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
};

export default Page;
