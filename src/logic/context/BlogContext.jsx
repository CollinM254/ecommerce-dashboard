import { createContext, useState, React, useEffect } from 'react';
import blogData from '../mock-data/blogData';

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [currentState, setState] = useState({
    blogList: [], // List for all the blog posts we have
    currentPageList: [], // List for all the posts in current page
    renderedBlogList: [], // List for all the posts displayed in current page
    currentPageIndex: 1,
    pageQty: 0,
    postsPerPage: 3,
  });

  const categoryCount = {
    Wood: 4,
    Handmade: 2,
    Interior: 2,
    Design: 2,
  };

  // Function to fetchData from api and calculate how many pages there will be.
  // For the sake of this exercise, we will use blogData since we don't have an api.
  function fetchData() {
    const newState = { ...currentState };

    newState.blogList = blogData;

    // This is where we calculate the number of pages.
    newState.pageQty = Math.ceil(newState.blogList.length / newState.postsPerPage);

    if (newState.pageQty === 1) {
      newState.currentPageList = [...newState.blogList];
    } else {
      newState.currentPageList = newState.blogList.slice(0, newState.postsPerPage);
      newState.renderedBlogList = [...newState.currentPageList];
    }
    setState(newState);
  }

  // This useEffect will enable us to run fetchData in mounting stage only.
  useEffect(() => {
    fetchData();
  }, []);

  // Fucntion to execute for numbered page buttons
  const updatePage = (index) => {
    if (currentState.currentPageIndex !== index) {
      const newState = { ...currentState };

      if (index !== newState.pageQty) {
        newState.currentPageList = newState.blogList.slice(
          newState.postsPerPage * (index - 1),
          newState.postsPerPage * index,
        );
      } else {
        newState.currentPageList = newState.blogList.slice(
          newState.postsPerPage * (index - 1),
        );
      }

      newState.renderedBlogList = [...newState.currentPageList];
      newState.currentPageIndex = index;
      setState(newState);
    }
  };

  // Function to execute for next & previous buttons
  const updatePageAlt = (btn) => {
    if (btn === 'next') {
      if (currentState.currentPageIndex < currentState.pageQty) {
        const newState = { ...currentState };
        newState.currentPageIndex++;
        if (newState.currentPageIndex !== newState.pageQty) {
          newState.currentPageList = newState.blogList.slice(
            newState.postsPerPage * (newState.currentPageIndex - 1),
            newState.postsPerPage * newState.currentPageIndex,
          );
        } else {
          newState.currentPageList = newState.blogList.slice(
            newState.postsPerPage * (newState.currentPageIndex - 1),
          );
        }
        newState.renderedBlogList = [...newState.currentPageList];
        setState(newState);
      }
    } else if (currentState.currentPageIndex > 1) {
      const newState = { ...currentState };
      newState.currentPageIndex--;
      newState.currentPageList = newState.blogList.slice(
        newState.postsPerPage * (newState.currentPageIndex - 1),
        newState.postsPerPage * newState.currentPageIndex,
      );
      newState.renderedBlogList = [...newState.currentPageList];
      setState(newState);
    }
  };

  return (
    <BlogContext.Provider value={{
      currentState,
      updatePage,
      updatePageAlt,
      categoryCount,
    }}
    >
      { children }
    </BlogContext.Provider>
  );
}
