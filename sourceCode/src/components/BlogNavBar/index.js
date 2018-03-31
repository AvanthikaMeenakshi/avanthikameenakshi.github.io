import React from 'react';
import {
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

const BlogNavBar = () => (
    <Navbar>
        <NavbarGroup>
            <NavbarHeading>Avanthika Meenakshi</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
            <Button className={Classes.MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
    </Navbar>
);

export default BlogNavBar;