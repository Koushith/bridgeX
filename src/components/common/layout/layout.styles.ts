import styled from "styled-components";

export const LayoutContainer = styled.div`
  .main-layout {
    background-color: red;
    width: 100%;
    height: 100%;
    display: flex;

    .sidebar {
      min-width: 15%;
      background-color: aqua;
    }

    .main-content {
      background-color: green;
      width: 100%;
      height: 100%;
    }
  }
`;
