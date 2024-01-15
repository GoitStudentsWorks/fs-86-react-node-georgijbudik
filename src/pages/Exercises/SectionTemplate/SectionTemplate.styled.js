import styled from 'styled-components';

export const Section = styled.section`
  // background-color: #040404;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-position: right bottom;
    /* background-position-y: calc(100% + 50px); */
    background-size: contain;
    // background-image: check notes;

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      // background-image: check notes@2;
    }
  }
`;

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;
