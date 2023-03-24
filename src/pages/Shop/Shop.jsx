import React from 'react';
import ButtonRow from '../../components/ButtonRow/ButtonRow';
import Intro from '../../components/Intro/Intro';
import NavBar from '../../components/NavBar/NavBar';
import StyledMain from './Shop-styles';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import FilterBand from '../../components/FilterBand/FilterBand';
import { ShopContext } from '../../logic/context/ShopContext';

export default function Shop() {
  return (
    <>
      <NavBar />
      <Intro />
      <FilterBand />
      <StyledMain>
        <ProductGrid />
        <ButtonRow contextToRender={ShopContext} />
        <Banner />
      </StyledMain>
      <Footer />
    </>
  );
}
