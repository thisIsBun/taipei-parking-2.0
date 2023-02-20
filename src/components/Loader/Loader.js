import styled from "styled-components";
import PropTypes from "prop-types";

const Loading = styled.div`
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid rgba(0, 0, 0, 0);
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;

export default function Loader({ borderColor, borderTopColor, width, height }) {
  return (
    <Loading style={{ width, height }}>
      <Div
        style={{
          borderColor,
          borderTopColor,
        }}
      />
    </Loading>
  );
}
Loader.propTypes = {
  borderColor: PropTypes.string,
  borderTopColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};
