import styled from "styled-components";

const Container = styled.div`
  
  position: fixed;
  display: flex;
  flex-direction:column;
  /* flex-shrink:1; */
  flex: 1;
  height: 90vh;
  top: 103px;
  left: 300px;
  background: #212121;
  overflow-y:scroll;
  
`;
Container.Item = styled.div`
  padding: 15px 10px;
  border-radius: 40px;
  /* background-size: cover; */
`;

Container.Wrapper = styled.div`
  /* margin: 0 auto; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex:1;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  /* background-size: cover; */
`;

export { Container };
