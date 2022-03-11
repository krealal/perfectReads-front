import styled from "styled-components";

const Section404 = styled.section`
  padding: 40px 0;
  background: #fff;
  height: 100vh;
  text-align: center;
`;

const Image404 = styled.section`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
`;

const Tittle404 = styled.h1`
  font-size: 80px;
`;

const H3404 = styled.h3`
  font-size: 40px;
`;

const Custom404 = () => {
  return (
    <Section404>
      <Image404>
        <Tittle404>404</Tittle404>
      </Image404>
      <H3404>Page not found</H3404>
    </Section404>
  );
};

export default Custom404;
