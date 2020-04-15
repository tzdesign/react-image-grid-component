import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px auto;
  width: 80vw;
  display: flex;
  justify-content: top;

  > div {
    flex: 1;
    padding: 0 5px;
  }

  img {
    max-width: 100%;
    margin: 5px 0;
    box-shadow: 0 29px 30px -34px #000;
  }
`;

const ImageGrid = ({ children, columns: outerColumns, random }) => {
  const [columns, setColumns] = useState(outerColumns || 4);
  const columnIndexies = Array.from(new Array(columns).keys());

  const childArray = React.Children.toArray(children).sort(() =>
    random ? 0.5 - Math.random() : 1
  );
  const chunks = Array.from(new Array(columns).keys()).map(() => []);

  childArray.forEach((child, i) => {
    chunks[i % columns].push(child);
  });

  useEffect(() => {
    if (children.length <= 4) {
      setColumns(2);
    }

    window.addEventListener("resize", function (e) {
      const windowWidth = window.outerWidth;

      switch (true) {
        case windowWidth < 500:
          setColumns(1);
          break;

        case windowWidth < 800:
          setColumns(2);
          break;

        case windowWidth < 1000:
          setColumns(3);
          break;

        default:
          setColumns(outerColumns || 4);
      }
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, [setColumns, children, outerColumns]);

  return (
    <Wrapper>
      {columnIndexies.map((column) => {
        const images = chunks[column];

        return <div key={`column-${column}`}>{images}</div>;
      })}
    </Wrapper>
  );
};

export default ImageGrid;
