import styled from '@emotion/styled';

export const Nav = styled.div`
  position: fixed;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;

    gap: 20px;

    list-style: none;

    li {
      cursor: pointer;
    }
  }
`;
