import { ReactElement, useState } from "react";
import { ISong } from "../interfaces";
import songsJson from "../data/songs.json";

import "../css/Player.css";

export function Player(): ReactElement {
    const songs: ISong[] = songsJson;
    //todo: setCurrentSong
    const [currentSong] = useState<ISong | null>(songs[0]);

    return (
        <section className="container">
            <div className="left-section">
                {songs.map((song, index) => (
                    //lite GPT fusk här men ville verkligen få till en BG color på active item
                    <div key={song.id} className={`song-item ${index === 0 ? 'first' : ''}`}>
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
                <div className="music-player">
                    {currentSong && (
                        <>
                            <img src={currentSong.picture} />
                            <h3>{currentSong.artist} - {currentSong.song}</h3>
                            <div className="media-controls">
                                <span className="material-symbols-outlined">
                                    skip_previous
                                </span>
                                <span className="material-symbols-outlined">
                                    play_arrow
                                </span>
                                <span className="material-symbols-outlined">
                                    skip_next
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}