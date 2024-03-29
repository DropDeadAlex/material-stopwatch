import styled  from 'styled-components';

const Button = styled.button`
  background-color: #483c36;
  color: #d8c9c0;
  border-radius: 2em;
  padding: 0.8em 1em;
  border: none;
  font-size: 1em;
  font-weight: 600;
  transition: 250ms;

  /* play button */
  &:nth-child(2) {
    border-radius: 4em;
    padding: 2em 2.25em;

    span{
      font-family: "Material Symbols Rounded";
    }
  }

  /* pause button */
  &.square {
    border-radius: 1.75em;
    padding-inline: 4em;
  }

  &:active {
    background-color: #5c5249
  }

  &.hide { 
    opacity: 0%;
    visibility: hidden;
  }
`

const Icon = styled.span`
  font-family: "Material Symbols Rounded unFilled";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;

  @font-face {
    font-family: "Material Symbols Rounded unFilled";
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/materialsymbolsrounded/v50/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDB_Qb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOc7TOVpeRL2w5rwZu2rGCiXxc.woff2) format("woff2");
  }

  @font-face {
    font-family: "Material Symbols Rounded";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialsymbolsrounded/v60/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDJ_vb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOc7TOVpeRL2w5rwZu2rIelXxc.woff2) format("woff2");
  }
`

export { Button, Icon}