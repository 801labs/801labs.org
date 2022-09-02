import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faGithub,
    faMeetup,
    faTwitterSquare,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = (props) => {
    return <ul className={"flex flex-wrap " + props.ulClassNames}>
        <li className={props.liClassNames}>
            <a className={props.aClassNames}
               href="https://discord.gg/uRSthurdPY"
               rel="noopener"
               target="_blank"
               title="Discord">
                <span className="sr-only">Discord</span>
                <FontAwesomeIcon icon={faDiscord} size={props.size}/>
            </a>
        </li>
        <li className={props.liClassNames}>
            <a className={props.aClassNames}
               href="https://twitter.com/801labs"
               rel="noopener"
               target="_blank"
               title="Twitter">
                <span className="sr-only">Twitter</span>
                <FontAwesomeIcon icon={faTwitterSquare} size={props.size}/>
            </a>
        </li>
        <li className={props.liClassNames}>
            <a className={props.aClassNames}
               href="https://www.meetup.com/801labs/"
               rel="noopener"
               target="_blank"
               title="Meetup">
                <span className="sr-only">Meetup</span>
                <FontAwesomeIcon icon={faMeetup} size={props.size}/>
            </a>
        </li>
        <li className={props.liClassNames}>
            <a className={props.aClassNames}
               href="https://www.youtube.com/c/801LabsSaltLakeCity"
               rel="noopener"
               target="_blank"
               title="YouTube">
                <span className="sr-only">YouTube</span>
                <FontAwesomeIcon icon={faYoutube} size={props.size}/>
            </a>
        </li>
        <li className={props.liClassNames}>
            <a className={props.aClassNames}
               href="https://github.com/801labs/"
               rel="noopener"
               target="_blank"
               title="GitHub">
                <span className="sr-only">GitHub</span>
                <FontAwesomeIcon icon={faGithub} size={props.size}/>
            </a>
        </li>
    </ul>
}

export default SocialLinks
