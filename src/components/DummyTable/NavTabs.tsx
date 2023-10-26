import { type TabType } from "./types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AppLink } from "shared/ui/AppLink/AppLink";

const style = {
    width: "100%",
    bgcolor: "background.paper",
};

interface ITabs {
    tabs: TabType[];
}

export const NavTabs = ({ tabs }: ITabs): JSX.Element => {
    return (
        <List sx={style} component='nav' aria-label='mailbox folders'>
            {tabs.map((tab) => (
                <>
                    <ListItem key={tab.id} button divider>
                        <AppLink to={`/${tab.id}`}>
                            <ListItemText primary={tab.title} />
                        </AppLink>
                    </ListItem>
                </>
            ))}
        </List>
    );
};
