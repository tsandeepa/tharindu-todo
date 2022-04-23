
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        *{
            margin: 0;
            box-sizing: border-box;
        }
    }
    button{
        cursor: pointer;
        font-size: 16px;
    }
    .login-container{
        height:100vh;
        display: flex;
        align-items: stretch;
        justify-content: center;
        .log-home{
            flex: 1;
            background: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:#99ffe6;
            background-color:hsla(0,100%,50%,1);
background-image:
radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
            h1{
                font-size: 70px;
                font-weight: 800;
                text-align: left;
                color: #fff;
            }
        }
        .login-pannel{
            display: flex;
            flex-direction: column;
            flex: 1;
            background: #fff;
            padding: 20px;
            border: 4px;
            justify-content: center;
            align-items: center;
            .lp-wrap{
                width: 500px;
                h2{
                    font-size: 40px;
                    font-weight: 500;
                    margin-bottom: 30px;
                }
                label{
                    margin-bottom: 20px;
                }
                input{
                    padding: 10px 20px;
                    width: 100%;
                    margin-bottom: 20px;
                    text-align: center;
                    font-size: 20px;
                }
                button{
                    display: block;
                    width: 100%;
                    padding: 15px 20px;
                    border: none;
                    background: #7c64ff;
                    color: #fff;
                }
            }
            
        }
        
    }
    .err-msg{
        background: #ffe8e8;
        color: #f07777;
        padding: 20px;
        margin-top: 20px;
        position: absolute;
        bottom: 13px;
        width: 500px;
    }
    .todo-ul{
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        padding-bottom: 100px;
    }
    .td-all{
        display: flex;
        flex-direction: column;
        gap: 10px;
        .todo-li{
            background: #f5f5f5;
            padding: 20px;
            cursor: pointer;
        }
    }
    .pagination-ul{
        position: fixed;
        background: #f8f8f8;
        bottom: 0;
        width: 100%;
        left: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 5px;
        padding: 20px;
        li{
            padding: 10px;
            background: #fff;
            cursor: pointer !important;
            width: 43px;
            color: #5c5c5c;
        }
    }
    .item-popup{
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        z-index:0;
        
    }
    .popup-panel{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        top: 0;
        background: #090c187d;
        width:100%;
        height: 100vh;
        .popup-content{
            width: 400px;
            height: 300px;
            border-radius: 4px;
            display: block;
            background: #fff;
            position: relative;
            z-index: 3;
            padding: 20px;
            h3{
                margin-bottom: 30px;
            }
            p{
                font-size: 13px;
                margin-bottom: 20px;
            }
            button{
                border:none;
                padding: 20px;
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
            }
        }
    }
`
export default GlobalStyles