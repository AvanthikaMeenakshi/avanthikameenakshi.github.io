import React from 'react';
import BlogNavBar from '../BlogNavBar';
import MediumPosts from '../MediumPosts';
import SideBar from '../SideBar';
import ImageSection from '../ImageSection';

const HomePageRenderer = () => (
    <div className="pt-dark">
        <BlogNavBar />
        <ImageSection />
        <div className="main-section-wrapper">
            <div className="sidebar-wrapper">
            </div>
            <div className="layout-wrapper">
            <MediumPosts />
            </div>
        </div>
    </div>
);

{/* <SideBar /> */}

export default HomePageRenderer;

