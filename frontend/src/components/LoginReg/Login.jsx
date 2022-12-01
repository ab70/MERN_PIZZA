import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInUser, signUpUser } from '../../Api'
//log reg switch state
const logReg = {
    login : {
        title: "Log in",
        view: 'login'
    },
    register: {
        title: "Sign up",
        view : "register"
    }
}

//signUp initoial object value
const signUpInitialState = {
  userName: '',
  userEmail: '',
  userPass : '',
  userAddress: ''
}

//signin initial obj value
const signInInitialState ={
  userEmail: '',
  userPass: ''
}

export default function Login() {
    //------states declare start--------
    //login or reg view toogle state
    const [logRegView, toggleview]= useState(logReg.login)
    
    //signUp form data state
    const [signUp, setSignUp] = useState(signUpInitialState)

    //signIn form State
    const [signIn, setSignIn] = useState(signInInitialState)



    //------states declare end--------


    //switch to login
    const toggleSignin = ()=>{
      toggleview(logReg.login)
    }
    //switch to sign up form
    const toggleSignup = ()=>{
      toggleview(logReg.register)
    }

    //on input change track changes (signUp)
    const onInputChange = (e)=>{
      setSignUp({...signUp, [e.target.name]: e.target.value})
      console.log(signUp);
    }
    //on input change track changes (signIn)form
    const onSignInChange = (e)=>{
      setSignIn({...signIn,[e.target.name]: e.target.value})
      console.log(signIn);
    }
    const postSignUp = async ()=>{
      let returneddata =   await signUpUser(signUp)
    }

    const postSignIn = async ()=>{
      let resSigninData = await signInUser(signIn) 
      console.log(resSigninData);
      // if(res.status===200){
      //   window.alert("login Successful")
      // }
      // else{
      //   window.alert("login Failed")
      // }
    }
    
  return (
    <>
        <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px;" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">

                    {/* checks if view is set to login */}

                    { logRegView.view === 'login' ? 
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    {logRegView.title}
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name='userEmail'
                            id="form3Example3c"
                            class="form-control"
                            onChange={(e)=>onSignInChange(e)}
                          />
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            name='userPass'
                            class="form-control"
                            onChange={(e)=>onSignInChange(e)}
                          />
                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>
                      <p >Dont have an account? <span> <Link  onClick={toggleSignup}> Sign Up</Link> </span> </p>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" onClick={postSignIn}>
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                    //runs this, if signup is clicked 
                    :
                    
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      {logRegView.title}
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            name='userName'
                            class="form-control"
                            onChange={(e)=>onInputChange(e)}
                          />
                          <label class="form-label" for="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name='userEmail'
                            id="form3Example3c"
                            class="form-control"
                            onChange={(e)=>onInputChange(e)}
                          />
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name='userPass'
                            id="form3Example4c"
                            class="form-control"
                            onChange={(e)=>onInputChange(e)}
                          />
                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name='userAddress'
                            id=""
                            class="form-control"
                            onChange={(e)=>onInputChange(e)}
                          />
                          <label class="form-label" for="form3Example4c">
                            Adress
                          </label>
                        </div>
                      </div>
                      <p>Already have an account? <span> <Link onClick={toggleSignin}> Login</Link> </span> </p>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" onClick={postSignUp}>
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                    }
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid loginImg"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
