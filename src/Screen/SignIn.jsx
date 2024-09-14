import {  styled } from "styled-components";

const Contenar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Titel = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${({theme}) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 18px;
`;

const SingIn = () => {
   return (
    <Contenar>
      <div>
        <Titel>Welcome Muccial city🖐</Titel>
        <Span>Please Login with your details here </Span>
      </div>
      <div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>SignUp</button>
      </div>
    </Contenar>
  );
};

export default SingIn;
