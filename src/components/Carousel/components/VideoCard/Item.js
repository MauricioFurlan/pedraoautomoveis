
import styled from "styled-components";

export default styled.div`
 text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 855px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  height: 300px;
  background-image: ${({ url }: { url: string }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 0.3s;
  border-radius: 6px;
   
`;