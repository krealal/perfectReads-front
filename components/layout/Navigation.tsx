/* eslint-disable @next/next/no-img-element */
import { TextField } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

const NavList = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 90px;
  background: #ffffff;
  box-shadow: 4px 0px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p {
    display: none;
  }
  .searchbar {
    display: none;
  }

  @media (min-width: 400px) {
    position: fixed;
    height: 117px;
    top: 0px;
    background: #ebebeb;
    a {
      display: none;
    }
    p {
      display: block;
      cursor: pointer;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.11em;

      color: #000000;
    }
    .linkImg {
      display: none;
    }
    .searchbar {
      display: block;
    }
  }
`;

const Navigation: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>perfectReads</title>
        <meta
          name="description"
          content="app to manage all your favorite books"
        />
        <link rel="icon" href="/img/ico.png" />
      </Head>

      {children}

      <NavList>
        <p>perfectreads</p>
        <TextField label="search book" id="search" className="searchbar" />

        <Link href="/" passHref>
          <img
            src="/img/home.png"
            height={"25px"}
            width={"25px"}
            alt="home"
            className="linkImg"
          />
        </Link>

        <Link href="/login" passHref>
          <img
            src="/img/profile.png"
            height={"25px"}
            width={"25px"}
            alt="login"
            className="linkImg"
          />
        </Link>

        <Link href="/settings" passHref>
          <img
            src="/img/fav-blank.png"
            height={"25px"}
            width={"25px"}
            alt="settings"
            className="linkImg"
          />
        </Link>

        <Link href="/" passHref>
          <p>Home</p>
        </Link>

        <Link href="/login" passHref>
          <p>Login</p>
        </Link>

        <Link href="/settings" passHref>
          <p>Settings</p>
        </Link>
      </NavList>
    </>
  );
};

export default Navigation;
