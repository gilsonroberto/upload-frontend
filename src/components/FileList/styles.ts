import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 1.25rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 0.938rem;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.75rem;
      color: #999;
      margin-top: 0.313rem;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 0.313rem;
        cursor: pointer;
      }
    }
  }
`;

interface PreviewProps {
  src?: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.313rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 0.625rem;
`;