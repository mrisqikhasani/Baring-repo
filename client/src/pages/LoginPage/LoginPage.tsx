import React from "react";
import { Grid } from "@mui/material";
import "./loginPage.scss";

export default function LoginPage() {
  return (
    <div className="loginPage">
      <Grid container spacing={2}>
        <Grid item >
          <div className="loginSection">
            <h1 className="logo">BARING</h1>
            <div className="headerSection__login">
              <h2 className="titleSection__login">Login</h2>
              <p>Your Entertainment Awaits</p>
            </div>
            <form className="sectionLogin">
              <div className="email">
                <label htmlFor="Email">Email</label>
                <input type="text" id="email" placeholder="Enter Your Email or username..." />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Your Password..."/>
              </div>
              <div className="forgotPassword">Forgot Password ?</div>
              <button type="submit">Login </button>
              <div className="signup">Don't have account ? <span> Sign Up</span></div>
            </form>
          </div>
        </Grid>
        <Grid item>
          <div
            className="pictureSection"
            // style={{ width: "497px", height: "726px", backgroundColor: "blue" }}
          >
            ini section picture
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
