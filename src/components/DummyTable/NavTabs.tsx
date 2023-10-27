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
        <>
            {tabs.map((tab) => (
                <List
                    key={tab.id}
                    sx={style}
                    component='nav'
                    aria-label='mailbox folders'
                >
                    <ListItem button divider>
                        <AppLink to={`/${tab.id}`}>
                            <ListItemText primary={tab.title} />
                        </AppLink>
                    </ListItem>
                </List>
            ))}
        </>
    );
};
