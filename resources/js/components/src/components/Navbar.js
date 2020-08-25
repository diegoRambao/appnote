import React, { Fragment, useState } from 'react'
import './../css/Navbar.css'
import { Collapse, List, ListItem, ListItemText, Fab, Icon } from '@material-ui/core';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <Fragment>
            <h2 className="title">AppNote</h2>

            <Fab
                aria-label="add"
                onClick={handleClick}
                className="button-fab mt-5"
            >
                <Icon className="icon-fab">add</Icon>
            </Fab>
            <Collapse in={open} timeout="auto" unmountOnExit >
                <List component="div" disablePadding className="center">
                <ListItem button>
                    <Fab
                        color="primary"
                        aria-label="add"
                        size="small"
                    />
                </ListItem>
                <ListItem button>
                    <Fab
                        color="primary"
                        aria-label="add"
                        className="button-fab"
                        size="small"
                    />
                </ListItem>
                </List>
            </Collapse>
        </Fragment>
    )
}

export default Navbar