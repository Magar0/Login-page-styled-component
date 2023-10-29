import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Login = () => {

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isTermsChecked, setIsTermsChecked] = useState(false)
  const [isRememberChecked, setIsRememberChecked] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== "" && password !== "") {
      if (isTermsChecked) {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 3000)
      } else {
        setError2(true)
        setTimeout(() => {
          setError2(false)
        }, 3000)
      }
    }
    else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }

  return (
    <>
      <Wrapper>
        <div className="container">
          <h2>Log In</h2>

          <form action="/">
            <FormGroup>
              <label htmlFor="id">Login ID :</label>
              <input type="text" name='id' id='id' placeholder='Enter Login ID' value={id} autoComplete="off" onChange={(e) => setId(e.target.value)} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">Password :</label>
              <input type={showPassword ? "text" : "password"} name='password' id='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
              <span className="icon" onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </FormGroup>

            <div className="checkbox remember">
              <input type="checkbox" id="remember" checked={isRememberChecked} onChange={() => setIsRememberChecked(!isRememberChecked)} />
              <label htmlFor="remember">Remember me</label>
              <Link href={"/"}>Change Password</Link>
            </div>

            <div className="checkbox terms">
              <input type="checkbox" id="terms" name="terms" checked={isTermsChecked} onChange={() => setIsTermsChecked(!isTermsChecked)} required />
              <label htmlFor="terms">Agree to <Link href={"/"}>Terms & Conditions</Link></label>
            </div>

            <div>
              <input type="submit" name="submit" id="submit" value={"Submit"} onClick={handleSubmit} />
              {success && <p className="success">Registration Successful 😃</p>}
              {error && <p className="error">please fill all the details😃</p>}
              {error2 && <p className="error">accept terms & policy</p>}
            </div>

          </form>

          <div className="register">
            <p>Don't have an account?
              <Link href={"/"}> Register Here </Link>
            </p>
          </div>

        </div>
      </Wrapper>
    </>
  )
}

export default Login

const Wrapper = styled.section`

  width:80%;

  h2{
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    line-height: 110%; 
    margin-bottom: 40px;
  }

  .checkbox{
    margin-top: 15px;
    color: #737B86;
  }

  .remember a{
  float: right;
  color: #F78719;
  text-decoration: none;
  }

  .checkbox input{
    margin-right: 10px;
  }

  .terms a{
    color: #F78719;
  }

  form div:last-child{
    text-align: center;
  }

  form .success{
    font-weight: 300;
    color: green;
  }

  form .error{
    font-weight: 300;
    color: red;
    text-transform: capitalize;
  }

  #submit{
    width: 50%;
    color: white;
    border-radius: 20px;
    background:  #1575A7;
    font-size: 1.1rem;
    padding: 10px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.2s;
  }

  #submit:hover{
  background-color: green;
  }

  .register p{
    font-weight: 500;
    color: #04072F;
    text-align: center;
    margin-top: 20px;
  }
  .register a{
    color: #F78719;
  }

  @media (max-width: 500px) {
  h2{
    font-size: 2rem;
  }
  .checkbox{
    font-size: 0.8rem;
  }
}
`

const FormGroup = styled.div`

position: relative;

  label{
    display: block;
    margin-top: 25px;
    margin-bottom: 5px;
  }

  input{
    width:100%;
    padding: 5px 10px;
   font-size: 1.2rem;
   border-radius: 8px;
   border: 2px solid aqua;
  }

  .icon{
    font-size: 1.2rem;
    position: absolute;
    right: 10px;
    top: 33px;
    cursor: pointer;
  }


`
