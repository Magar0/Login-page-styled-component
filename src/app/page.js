"use client"

import Image from "next/image"
import styled from "styled-components"
import Login from "./components/Login"
import { GlobalStyle } from "./styles/GlobalStyle"


const Page = () => {

  return (
    <>
      <GlobalStyle />
      <Section>
        <div className="img">
          <Image src="/Login.jpg" alt="img" height={500} width={400} />
        </div>

        <div className="box">
          <Login />
        </div>
      </Section>
    </>
  )
}

export default Page

const Section = styled.section`
  display: flex;
  padding: 40px 70px;
  justify-content: space-around;
  align-items: center;

.box{
  width: 700px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 12px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  display: grid;
  place-items: center;
  margin-left: 10px;
}

@media (max-width: 1200px) {
  .box{
    width: 500px;
  }
}

@media (max-width: 992px) {
  .box{
    width: 400px;
  }
  .img img{
    width:200px;
    height:300px;
  }
}

@media (max-width: 768px) {
 .img{
  display: none;
 }
}

@media (max-width: 500px) {
 .box{
  width: 300px;
 }
}

`