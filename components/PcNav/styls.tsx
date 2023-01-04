import styled from '@emotion/styled';

export const Nav = styled.div`
  display: inline-block;
  flex: 1;

  ul {
    padding-left: 5rem;
    list-style: none;

    li {
      float: left;

      margin-left: 30px;

      cursor: pointer;
    }

    &::after {
      display: block;
      clear: both;
      content: '';
    }
  }
`;
