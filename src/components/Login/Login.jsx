import React , {useState}from "react";
import * as loginComponent from './loginComponent';
import '../../css/login.css';


function Login() {
    const [signIn, toggle] = useState(true);
    console.log(signIn);
        return(
            <div className="loginpage">
            <loginComponent.Container>
                <loginComponent.SignUpContainer signinIn={signIn}>
                    <loginComponent.Form>
                        <loginComponent.Title>Student Sign In</loginComponent.Title>
                        <loginComponent.Input type='email' placeholder='Email' />
                        <loginComponent.Input type='password' placeholder='Password' />
                        <loginComponent.Anchor href='#'>Forgot your password?</loginComponent.Anchor>
                        <loginComponent.Button>Sign In</loginComponent.Button>
                    </loginComponent.Form>
                </loginComponent.SignUpContainer>
            
                <loginComponent.SignInContainer signinIn={signIn}>
                    <loginComponent.Form>
                        <loginComponent.Title>University Sign In</loginComponent.Title>
                        <loginComponent.Input type='email' placeholder='Email' />
                        <loginComponent.Input type='password' placeholder='Password' />
                        <loginComponent.Anchor href='#'>Forgot your password?</loginComponent.Anchor>
                        <loginComponent.Button>Sign In</loginComponent.Button>
                    </loginComponent.Form>
                </loginComponent.SignInContainer>
        
                <loginComponent.OverlayContainer signinIn={signIn}>
                    <loginComponent.Overlay signinIn={signIn}>
        
                    <loginComponent.LeftOverlayPanel signinIn={signIn}>
                        <loginComponent.Title>Welcome Back!</loginComponent.Title>
                        <loginComponent.Paragraph>
                            Click here for University Sign in
                        </loginComponent.Paragraph>
                        <loginComponent.GhostButton onClick={() => toggle(true)}>
                                University
                            </loginComponent.GhostButton>
                            </loginComponent.LeftOverlayPanel>
            
                            <loginComponent.RightOverlayPanel signinIn={signIn}>
                            <loginComponent.Title>Hello, Friend!</loginComponent.Title>
                        <loginComponent.Paragraph>
                            Click here for Student Sign in
                        </loginComponent.Paragraph>
                            <loginComponent.GhostButton onClick={() => toggle(false)}>
                                Student
                            </loginComponent.GhostButton> 
                      </loginComponent.RightOverlayPanel>
  
                  </loginComponent.Overlay>
              </loginComponent.OverlayContainer>

          </loginComponent.Container>
            </div>
      )
}

export default Login;