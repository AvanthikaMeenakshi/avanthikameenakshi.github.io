import React from 'react';
import BlogNavBar from '../BlogNavBar';
import MediumPosts from '../MediumPosts';
import ImageSection from '../ImageSection';
import Footer from '../Footer';

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
        <Footer />
    </div>
);

export default HomePageRenderer;

