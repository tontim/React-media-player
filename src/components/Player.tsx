import { ReactElement } from "react";
import { ISong } from "../interfaces";
import songsJson from "../data/songs.json";

import "../css/Player.css";

export function Player(): ReactElement {
    const songs: ISong[] = songsJson;

    return (
        <section className="container">
            <div className="left-section">
                {songs.map((song) => (
                    <div key={song.id} className="song-item">
                        <img src={song.picture} />
                        <div className="song-item-content">
                            <div className="song-item-text">
                                <h3>{song.artist}</h3>
                                <p>{song.song}</p>
                            </div>
                            <span className="material-symbols-outlined">
                                play_arrow
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="right-section">
                <h2>Music Player</h2>
            </div>
        </section>
    );
}