import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

body{
    
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    height: 100vh;
}
`;
export default Global;
