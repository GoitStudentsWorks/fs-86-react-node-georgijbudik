import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

  /*  Временно - убрать после добавления в main*/
  /* background-color: #040404; */

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 96px;
  }
`;
