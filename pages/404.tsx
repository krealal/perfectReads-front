import styled from "styled-components";

const Section404 = styled.section`
  padding: 40px 0;
  background: #fff;
  height: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .image404 {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    background-position: center;
    height: 600px;
    width: 400px;
  }
  &h1 {
    font-size: 80px;
  }
  &h3 {
    font-size: 40px;
  }
  @media (min-width: 400px) {
    .image404 {
      background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
      background-position: center;
      height: 400px;
      width: 600px;
    }
  }
`;

const Custom404 = () => {
  return (
    <Section404>
      <section className="image404">
        <h1>404</h1>
      </section>
      <h3>Page not found</h3>
    </Section404>
  );
};

export default Custom404;
