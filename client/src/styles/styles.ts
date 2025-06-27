import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --main-color-1: #BE1622;
        --main-color-2: #706F6F;
        --gray: #9D9D9C;
        --dark: #1D1D1B;
        --sans-font: "Noto Sans Variable",sans-serif;
        --white: #fff;
        --serif-font: "Fraunces Variable",sans-serif;
        --transparent: #fff0;
        --radius: 0px;
        --radius-large: 50em;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    form {
        margin: 0 auto 0 auto;
        padding:30px;
        height:auto;
        overflow:hidden;
        background:white;
        border-radius:10px;
    }

    form label {
        font-size:14px;
        color:darkgray;
        cursor:pointer;
    }

    form label,
    form input {
        float:left;
        clear:both;
    }

    form input {
        margin:15px 0;
        padding:15px 10px;
        width:100%;
        outline:none;
        border:1px solid #bbb;
        border-radius:20px;
        display:inline-block;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
                box-sizing:border-box;
        -webkit-transition:0.2s ease all;
        -moz-transition:0.2s ease all;
            -ms-transition:0.2s ease all;
            -o-transition:0.2s ease all;
                transition:0.2s ease all;
    }

    form input[type=text]:focus,
    form input[type="password"]:focus {
        border-color:cornflowerblue;
    }

    input[type=submit] {
        padding:15px 50px;
        width:auto;
        background:#1abc9c;
        border:none;
        color:white;
        cursor:pointer;
        display:inline-block;
        float:right;
        clear:right;
        -webkit-transition:0.2s ease all;
        -moz-transition:0.2s ease all;
            -ms-transition:0.2s ease all;
            -o-transition:0.2s ease all;
                transition:0.2s ease all;
    }

    input[type=submit]:hover {
        opacity:0.8;
    }

    input[type="submit"]:active {
        opacity:0.4;
    }
`;
