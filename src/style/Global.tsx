import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'
import colors from 'config/chakra/styles/colors'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Aeonik Pro', sans-serif;
  }
  body {
    background: ${colors.primary};
    overflow-x: hidden;
    // background: url("/images/farms-header-img.png") no-repeat center center /cover;

    a {
      text-decoration: none;
      color:transprent;
    }
    img {
      height: auto;
      max-width: 100%;
    }
  }

  text-shadow: 0 0 64pxrgba(225,194,255,.48),0 0 16px rgba(58,54,255,.24);

  .nav {
    width: 400px;
  }

  .menu-desktop[data-v-4754eb8b] {
    color: #fff;
    outline: none;
    background-color: #9B1217;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-desktop__row[data-v-4754eb8b] {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-desktop__nav[data-v-4754eb8b] {
    display: block;
    width: max-content;
    align-self: center;
  
    
  }
  .menu-desktop__list[data-v-4754eb8b] {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0px;
    padding-left: 2rem;
    list-style: none;
    flex-shrink: 1;
  }
  .menu-desktop__item[data-v-4754eb8b] {
    margin-right: 4%;
    @media (max-width: 1200px) {
      margin-right: 0;
    }
  }
  .menu-desktop__link[data-v-4754eb8b] {
    display: block;
    text-decoration: none;
    font-weight: 400;
    padding: 5px 7px;
    padding-top: 30px;
    height: 100px;
    font-size: 16px;
    line-height: 40px;
    color: #fff;
    transition: background-color 0.15s, color 0.15s;
  }
  /* .auth[data-v-4754eb8b] {
    margin-right: 0%;
  } */
  .menu-desktop__link[data-v-4754eb8b]:hover {
    color: #fff;
    cursor: pointer;
    background-color: ${colors.primary};
    border-bottom: 4px solid ${colors.secondary}
    /* font-weight: bolder; */
  }
  .menu-desktop__actions[data-v-4754eb8b] {
    display: flex;
  }
  .menu-desktop__action[data-v-4754eb8b] {
    flex-shrink: 0;
    margin-left: auto;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  
  .menu-desktop__link[data-v-4754eb8b] {
    font-weight: normal;
  }
  .menu-desktop-sub[data-v-f0c40470] {
    position: relative;
    color: #fff;
  }
  .menu-desktop-sub__title-btn[data-v-f0c40470] {
    display: flex;
    align-items: center;
    height: 100px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0px 7px;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: background-color 0.3s, color 0.3s;
  }
  .menu-desktop-sub__title-icon[data-v-f0c40470] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5000 5000' fill='%23fff'%3E%3Cpath d='M4420 937.5L2500 2879.3 590 937.5 0 1534.2l2500 2528.3 2500-2528.3-580-596.7z'/%3E%3C/svg%3E");
    width: 8px;
    height: 8px;
    margin-left: 6px;
    margin-top: 2px;
    background-position: 50% calc(50% + 1px);
    background-repeat: no-repeat;
    background-size: contain;
    transition: background 0.15s, transform 0.15s;
  }
  .menu-desktop-sub:hover .menu-desktop-sub__title-btn[data-v-f0c40470] {
    background-color: ${colors.primary};
    color: #fff;
    cursor: pointer;
    border-bottom: 4px solid ${colors.secondary};
    padding: 0px 7px;
    /* font-weight: bolder; */
  }
  .menu-desktop-sub:hover .menu-desktop-sub__title-icon[data-v-f0c40470] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5000 5000' fill='%23fff'%3E%3Cpath d='M4420 937.5L2500 2879.3 590 937.5 0 1534.2l2500 2528.3 2500-2528.3-580-596.7z'/%3E%3C/svg%3E");
    background-position: 50% calc(50% - 1px);
    transform: rotate(180deg);
  }
  .menu-desktop-sub__list-wrp[data-v-f0c40470] {
    position: absolute;
    left: 0;
    top: 100%;
    width: auto;
    min-width: 100%;
    display: flex;
    overflow: hidden;
    background-color: ${colors.primary};
    outline: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    opacity: 0;
    visibility: hidden;
    transform: matrix(1, 0, 0, 0.1, 0, 0);
    transform-origin: center 0 0;
    transition: opacity 0.15s, transform 0.15s;
  }
  .menu-desktop-sub__list[data-v-f0c40470] {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
  .menu-desktop-sub__item[data-v-f0c40470] {
    padding: 0;
  }
  .menu-desktop-sub__link[data-v-f0c40470] {
    height: 40px;
    min-width: 150px;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    padding: 0 8px;
    text-decoration: none;
    font-weight: 300;
    font-size: 16px;
    white-space: nowrap;
    color: inherit;
    transition: background-color 0.15s, color 0.15s;
  }
  .menu-desktop-sub__link[data-v-f0c40470]:hover {
    background-color: #36474f;
    color: #fff;
    text-decoration: none!important;

  }
  .menu-desktop-sub__link-wrp[data-v-f0c40470] {
    justify-content: flex-start;
  }
  .menu-desktop-sub:hover .menu-desktop-sub__list-wrp[data-v-f0c40470] {
    z-index: 1000;
    opacity: 1;
    visibility: visible;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition-duration: 0.3s;
    transition-delay: 0.15s;
  }
  @media (min-width: 1200px) {
    .menu-desktop-sub__link[data-v-f0c40470] {
      padding: 0 16px;
    }
  }
  .menu-desktop__form {
    background-color: transparent;
    display: flex;
    width: fit-content;
    border-radius: 0.2rem;
    outline: none;
    margin-left: auto;
  }
  .menu-desktop__input{
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0rem 1rem;
    width: 90%; 
    display: none;
  }
  
  .menu-desktop__form:hover {
    background-color: #fff;
    width: 100%;
    height: 40px;
  }
  
  .menu-desktop__form:hover > .menu-desktop__input {
    display: block;
  }
  
  .menu-desktop__search-btn {
    border: none;
    background-color: transparent;
    z-index: 50;
  
  } 
  
  .menu-desktop__form:hover > .menu-desktop__search-btn {
    /* background-color: #9B1217; */
    height: 30px;
    width: 30px;
    margin-right: 1rem;
    margin-top:auto;
    margin-bottom:auto;
    border-radius: 50%;
    text-align: center;
    padding: auto;
    transition: 0.25s ease all;
  }
  
  .menu-desktop__form:hover > .menu-desktop__search-btn > .search-icon {
    transition: 0.45s ease all;
    color: #0f0f0f!important;
  }
  
  .menu-desktop_auth_coming__soon {
    font-size: 9px;
    padding: 2px 8px;
    border-radius: 5px;
    background-color: #36474f;
    color: #fff;
    position: absolute;
    margin-right: -245px;
  }
  
  
  

  
  @media (max-width: 1055px) {
    .menu-desktop__row[data-v-4754eb8b] {
      justify-content: space-between;
    }
  
    .menu-desktop__nav[data-v-4754eb8b] {
      width: 100%;
      margin-right: auto;
  
    }
    .menu-desktop__actions[data-v-4754eb8b] {
      width: 50%;
    }
    
  }
  
  @media (min-width: 2122px) {
    .menu-desktop {
      padding: 0px 25%;
    }
  }
  
  @media (max-width: 1055px) {
    .menu-desktop__list[data-v-4754eb8b] {
      
      /* justify-content: unset; */
    }
  }
`

export default GlobalStyle
