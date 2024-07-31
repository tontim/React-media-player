import { ReactElement } from "react";
import { ILink } from ".";

interface ILinkProps {
    link: ILink;
}

export function Link({ link }: ILinkProps): ReactElement {
    const {id, label, href} = link;
    return (
        <a id={id} href={href} className="link">
            {label}
        </a>
    )
}