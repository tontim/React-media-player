import { ReactElement } from "react";
import linksJson from "../data/links.json";
import { ILink } from "../interfaces";
import { Link } from "./Link";

import "../css/Header.css";

export function Header(): ReactElement {
    const links: ILink[] = linksJson;

    const backButton = links.find(link => link.id === "a");
    const optionsButton = links.find(link => link.id === "b");
    const currentPlaylist = links.find(link => link.id === "c");

    return (
        <header className="header container">
             {backButton && <Link link={backButton} />}
             {currentPlaylist && <Link link={currentPlaylist} />}
             {optionsButton && <Link link={optionsButton} />} 
        </header>
    )
}