import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { MdSearch } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import Link from "next/link";
import PopForm from "./PopForm";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from "../reducers/user";
import Router from "next/router";
import LOGO from "../assets/img/logo2.png";
import { END } from "redux-saga";
import axios from "axios";
import wrapper from "../store/configureStore";

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
    .blueCircle {
      background: rgb(30, 66, 148);
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
    props.colors &&
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
    props.colors &&
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

function Layout({ visible, children }) {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
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
  const [search, onChange] = useInput("");
  const onSearch = (e) => {
    e.preventDefault();
    Router.push(`/search/${search}`);
  };
  const onLogout = () => {
    Router.push("/");
    dispatch({ type: LOG_OUT_REQUEST });
  };
  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 700) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Header visible={visible} colors={color}>
        <TopHeader colors={color}>
          <Link href="/">
            <a>
              <div>
                <img src={LOGO} alt="로고" height="50px" />
              </div>
            </a>
          </Link>
          <ul>
            {!me ? (
              <>
                <li onClick={onLoginOpen}>
                  <i></i>
                  <span>Login</span>
                </li>
                <li onClick={onSignupOpen}>
                  <i className="blueCircle"></i>
                  <span>Signup</span>
                </li>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <li onClick={onLogout}>
                      <i></i>
                      <span>LogOut</span>
                    </li>
                  </a>
                </Link>
                <Link href="/profile">
                  <a>
                    <li>
                      <i className="blueCircle"></i>
                      <span>{me.nickname}님</span>
                    </li>
                  </a>
                </Link>
              </>
            )}
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
            <Link href="/catagory/1">
              <a>
                <li>취업용</li>
              </a>
            </Link>
            <Link href="/catagory/2">
              <a>
                <li>사이드</li>
              </a>
            </Link>
            <Link href="/catagory/3">
              <a>
                <li>토이</li>
              </a>
            </Link>
            <Link href="/catagory/4">
              <a>
                <li>스타트업</li>
              </a>
            </Link>
            <Link href="/catagory/5">
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
          <form onSubmit={onSearch}>
            <input type="text" value={search} onChange={onChange} />
            <button type="submit">
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
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log("SSR시작");
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log("SSR끝");
    await context.store.sagaTask.toPromise();
  }
);

export default Layout;
