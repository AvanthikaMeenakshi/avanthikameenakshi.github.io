import React from 'react';
import BlogNavBar from '../BlogNavBar';
import MediumPosts from '../MediumPosts';
import SideBar from '../SideBar';

const HomePageRenderer = () => (
    <div className="pt-dark">
        <BlogNavBar />
        <div className="main-section-wrapper">
            <div className="sidebar-wrapper">
            <SideBar />
            </div>
            <div className="layout-wrapper">
            <MediumPosts />
            </div>
        </div>
    </div>
);

export default HomePageRenderer;

