import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;   
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%; 
  background-color: white;
  padding: 20px;
  ${mobile({ width: "50%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  min-width : 40%; /* Cant be smaller than 40 percent but can be bigger than this*/
  margin : 20px 10px 0px 0px;
  padding : 5px;
`;
const Agreement = styled.span`
 font-size : 12px;
 margin: 30px 0px;
`;
const Button = styled.button`
 padding: 10px 20px;
 float: right;
 right : 0;
 position : absolute;
 bottom : 2px;
 cursor : pointer;
 background-color : teal;
 color : white;
 border : none;
 border-radius: 2px;
 ${mobile({ flexEnd: "right", width: "30%", height:"10%",
   display: "flex", justifyContent: "center", alignItems: "center"
  })}
`;

const Regsiter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account , I consent to the processing of my personal
            data in accordance with the
            <b style={{marginLeft : "5px"}}>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Regsiter;
