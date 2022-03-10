import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

const NavImg = styled.img`
  height: 25px;
`;

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
        <Link href="/">
          <a>
            <NavImg src="/img/home.png" alt="" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <NavImg src="/img/profile.png" alt="" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <NavImg src="/img/fav-blank.png" alt="" />
          </a>
        </Link>
      </NavList>
    </>
  );
};

export default Navigation;
