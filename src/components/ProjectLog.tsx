import { Group } from "@mantine/core"
import classes from "./ProjectLogItem.module.css"

interface LogItemProps {
    leadElement: "text" | "img"
    logText: string
    logImg: string
}

export function LogItem({ leadElement, logText, logImg }: LogItemProps) {
    const textElement = <div className={classes.textDiv}>{logText}</div>
    const imgElement = <div className={classes.imgDiv}><img src={logImg} className={classes.img} /></div>

    return (
        <Group style={{ display: "flex" }}>
            {leadElement === "text" ? (
                <>
                    {textElement}
                    {imgElement}
                </>
            ) : (
                <>
                    {imgElement}
                    {textElement}
                </>
            )}
        </Group>
    );
}

interface LogEntryData {
    text: string;
    img: string;
}

interface LogProps {
    logEntries: LogEntryData[];
}

export default function ProjectLog({ logEntries }: LogProps) {
    return logEntries.map((item, index) => (
        <LogItem
            key={index}
            leadElement={(index % 2 !== 0) ? "text" : "img"}
            logText={item.text}
            logImg={item.img}
        />
    ));
}