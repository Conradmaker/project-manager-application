import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { MdSearch } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import Link from "next/link";
import PopForm from "./PopForm";

const Search = styled.div`
  width: 1100px;
  height: 0px;

  box-shadow: 0 2px 5px gray;

  display: flex;
  flex-direction: column;

  opacity: 0;
  overflow: hidden;
  background: #fff;
  transition: all 0.3s ease-in;
  ${(props) =>
    props.open &&
    css`
      height: 110px;
      opacity: 1;
    `}
  h1 {
    margin: 10px auto;
    font-size: 20px;
    font-weight: bold;
  }
  form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 50%;
      border: none;
      outline: none;
      border-bottom: 1.3px solid gray;
      font-size: 20px;
    }
    button {
      border: none;
      outline: none;
      background: none;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
const BottomHeader = styled.nav`
  width: 1100px;
  height: 40px;

  background: rgb(30, 66, 148);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 10px 20px;
      color: white;
      font-size: 20px;
    }
  }
  i {
    background: #fff;
    width: 35px;
    height: 35px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(30, 66, 148);
    font-size: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 5px white;
    }
  }
`;
const TopHeader = styled.nav`
  width: 1060px;
  height: 90px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    color: rgb(30, 66, 148);
    font-size: 33px;
    font-weight: bold;
  }
  ul {
    display: flex;
    li:nth-child(2) {
      i {
        background: rgb(30, 66, 148);
      }
    }
    li {
      color: #fff;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        text-shadow: 0 0 5px rgb(30, 66, 148);
        i {
          transition: all 0.3s ease;
          box-shadow: 0 0 5px rgb(30, 66, 148);
        }
      }

      i {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 0 10px 0 30px;
        background: #fff;
        border-radius: 50%;
      }
      span {
        font-size: 22px;
        font-weight: bold;
      }
    }
  }
  ${(props) =>
    props.color &&
    css`
      transition: all 0.3s;

      ul li {
        color: rgb(30, 66, 148);
        i {
          background: rgb(30, 66, 148);
        }
      }
    `}
`;
const Header = styled.header`
  width: 100vw;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;

  transition: all 0.3s;
  ${(props) =>
    props.color &&
    css`
      background: #fff;
    `}
  ${(props) =>
    props.visible &&
    css`
      opacity: 0;
      z-index: 0;
    `}
`;

export default function Layout({ visible, children }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const onLoginOpen = useCallback(() => {
    setLoginOpen(!loginOpen);
  }, []);
  const [signupOpen, setSignupOpen] = useState(false);
  const onSignupOpen = useCallback(() => {
    setSignupOpen(!signupOpen);
  }, []);
  const [searchOpen, setSearchOpen] = useState(false);
  const onChangeOpen = () => {
    setSearchOpen(!searchOpen);
  };
  const [color, setColor] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 700) {
        setColor(true);
      } else {
        setColor(false);
      }
      console.log(window.pageYOffset);
    }
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Header visible={visible} color={color}>
        <TopHeader color={color}>
          <Link href="/">
            <a>
              <div>Project</div>
            </a>
          </Link>
          <ul>
            <li onClick={onLoginOpen}>
              <i></i>
              <span>Login</span>
            </li>
            <li onClick={onSignupOpen}>
              <i></i>
              <span>Signup</span>
            </li>
            <Link href="/about">
              <a>
                <li>
                  <i></i>
                  <span>about</span>
                </li>
              </a>
            </Link>
          </ul>
        </TopHeader>
        <BottomHeader>
          <ul>
            <Link href="/list">
              <a>
                <li>취업용</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li>사이드</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li>토이</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li>스타트업</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li>기업</li>
              </a>
            </Link>
          </ul>
          <i onClick={onChangeOpen}>
            <MdSearch />
          </i>
        </BottomHeader>
        <Search open={searchOpen}>
          <h1>어떤 팀을 찾고있나요?</h1>
          <form>
            <input type="text" />
            <button>
              <VscSearch />
            </button>
          </form>
        </Search>
      </Header>
      {children}
      {loginOpen && <PopForm close={setLoginOpen} header="login" />}
      {signupOpen && <PopForm close={setSignupOpen} header="signup" />}
    </>
  );
}
