import React from 'react';
import PcNav from '@components/PcNav';
import { Contents, Header, HeaderTitle, Wrapper } from './styles';
import { useMediaQuery } from 'react-responsive';
import MobileNav from '@components/MobileNav';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Kanghun's Portfolio</HeaderTitle>
        {isMobile ? <MobileNav /> : <PcNav />}
      </Header>
      <Contents>
        <article></article>
        <article></article>
        <article></article>
      </Contents>
    </Wrapper>
  );
};

export default Home;
