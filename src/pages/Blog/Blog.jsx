import React from 'react';
import Banner from '../../components/Banner/Banner';
import BlogMain from '../../components/BlogMain/BlogMain';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import NavBar from '../../components/NavBar/NavBar';

function Blog() {
  return (
    <>
      <NavBar />
      <Intro />
      <BlogMain />
      <Banner />
      <Footer />
    </>
  );
}

export default Blog;
