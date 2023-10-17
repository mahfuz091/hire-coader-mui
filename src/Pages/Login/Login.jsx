/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import loginCardLogo from "../../assets/Images/login-card-logo.png";
import eye from '../../assets/Images/eye.svg'
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePass = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className='login'>
      <Grid container>
        <Grid sm={12} md={6} className='login-left'>
          <img src={logo} alt='' />
          <h2 className='login-title'>Welcome Back</h2>
          <p className='login-sub-title'>Log in as</p>
          <form className='login-form' action=''>
            <div className='form-group radio'>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                  defaultValue='coder'
                >
                  <FormControlLabel
                    value='Client'
                    control={<Radio />}
                    label='Client'
                  />
                  <FormControlLabel
                    value='coder'
                    control={<Radio />}
                    label='Coder'
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className='form-group'>
              <TextField
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                id='outlined-basic'
                label='Email'
                variant='outlined'
                placeholder='Email'
              />
            </div>
            <div className='form-group mb-0 password '>
              <TextField
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#14A800",
                    },
                  },
                }}
                type={isPasswordVisible ? "text" : "password"}
                id='outlined-basic'
                label='Password'
                variant='outlined'
                placeholder='Password'
              />
              <div onClick={togglePass}>
                {
                  isPasswordVisible ? <><svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_611_66)'>
                      <path
                        d='M9.07496 3.88702C9.70593 3.73932 10.3519 3.66549 11 3.66702C17.4166 3.66702 21.0833 11.0003 21.0833 11.0003C20.5269 12.0413 19.8633 13.0214 19.1033 13.9245M12.9433 12.9437C12.6915 13.2139 12.3879 13.4306 12.0506 13.5809C11.7133 13.7312 11.3491 13.812 10.9799 13.8185C10.6106 13.825 10.2439 13.7571 9.90144 13.6188C9.55901 13.4805 9.24795 13.2746 8.98682 13.0135C8.72568 12.7524 8.51982 12.4413 8.38151 12.0989C8.2432 11.7564 8.17528 11.3897 8.18179 11.0204C8.18831 10.6512 8.26913 10.287 8.41943 9.94971C8.56973 9.61238 8.78644 9.30878 9.05663 9.05702M16.445 16.4453C14.878 17.6398 12.97 18.3015 11 18.3337C4.58329 18.3337 0.916626 11.0003 0.916626 11.0003C2.05686 8.87542 3.63833 7.01891 5.55496 5.55535L16.445 16.4453Z'
                        stroke='black'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M0.916626 0.916992L21.0833 21.0837'
                        stroke='black'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_611_66'>
                        <rect width='22' height='22' fill='white' />
                      </clipPath>
                    </defs>
                  </svg></> : <> <img className="eye" src={eye} alt="" /></>
                }
              </div>

            </div>
            <a className='forgot-password' href='#'>
              Forgot Password
            </a>

            <Button className='primary-btn' fullWidth variant='contained'>
              Log in
            </Button>
            <p className='account'>
              Don’t have an account? <Link to='/signup'>Sign Up</Link>
            </p>
          </form>
        </Grid>
        <Grid sm={12} md={6} className=' position-relative login-right'>
          <div className='login-img'></div>
          <div className='login-card'>
            <div className='login-card-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='55'
                height='56'
                viewBox='0 0 55 56'
                fill='none'
              >
                <circle
                  opacity='0.1'
                  cx='40.3452'
                  cy='15.5571'
                  r='39.6675'
                  fill='#14A800'
                />
              </svg>
            </div>
            <h3 className='login-car-title'>Marvin McKinney</h3>
            <p className='login-card-desig'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <g clipPath='url(#clip0_162_5868)'>
                  <path
                    d='M3.26172 0.256834C2.99219 0.365232 2.85156 0.611326 2.85156 0.977537V1.21777L2.24512 1.22656C1.64746 1.23535 1.63281 1.23828 1.45996 1.31738C1.13477 1.46972 0.906251 1.75683 0.833009 2.09961C0.806642 2.21972 0.800782 3.76074 0.806642 8.32812L0.815431 14.3955L0.932618 14.627C1.07031 14.8936 1.25488 15.0664 1.51856 15.1631L1.68262 15.2246L7.60645 15.2187L13.5303 15.21L13.6973 15.1309C13.917 15.0283 14.1133 14.8262 14.2275 14.5859L14.3213 14.3896L14.3301 8.32519C14.3389 1.96191 14.3418 2.0791 14.2129 1.82422C14.1162 1.63379 13.8848 1.41113 13.6826 1.32031C13.5039 1.23535 13.4922 1.23535 12.8945 1.22656L12.2852 1.21777V0.974607C12.2852 0.66992 12.1943 0.464842 11.998 0.327147C11.8809 0.248045 11.8457 0.239256 11.5996 0.230467C11.2773 0.218747 11.1543 0.262693 10.9873 0.458982C10.8672 0.599607 10.8203 0.76074 10.8203 1.02734V1.2207H7.56836H4.31641V1.02734C4.31641 0.76074 4.26953 0.599607 4.14942 0.458982C3.99121 0.274412 3.86524 0.224607 3.57813 0.227537C3.44336 0.227537 3.30274 0.242186 3.26172 0.256834ZM3.7832 0.769529C3.83594 0.831053 3.84766 0.877928 3.84766 1.0332V1.2207H3.58399H3.32031V1.0332C3.32031 0.795897 3.33789 0.754881 3.44922 0.705076C3.56641 0.652342 3.69824 0.678709 3.7832 0.769529ZM11.667 0.696287C11.79 0.740232 11.8164 0.798826 11.8164 1.02734V1.2207H11.5527H11.2891V1.0332C11.2891 0.828123 11.3535 0.708006 11.4736 0.684568C11.5088 0.678709 11.5469 0.66992 11.5557 0.66699C11.5645 0.66699 11.6143 0.678709 11.667 0.696287ZM2.85742 2.12304C2.86621 2.54199 2.86914 2.5625 2.94824 2.67969C3.09473 2.90527 3.41113 3.04297 3.61035 2.97558C3.71582 2.9375 3.75977 2.87304 3.75977 2.75C3.75977 2.64453 3.66309 2.55371 3.51953 2.52734C3.34668 2.49512 3.32031 2.43359 3.32031 2.03515V1.68945H7.07031H10.8203V2.03515C10.8203 2.46582 10.8643 2.63281 11.0166 2.77929C11.166 2.91992 11.3008 2.98437 11.4648 2.99023C11.6465 2.99316 11.7285 2.92578 11.7285 2.76758C11.7285 2.63574 11.6465 2.53906 11.5352 2.53906C11.4912 2.53906 11.4238 2.5039 11.374 2.4541C11.2891 2.36914 11.2891 2.36328 11.2891 2.02929V1.68945H12.3232C13.4746 1.68945 13.4863 1.69238 13.6826 1.89746C13.8584 2.08496 13.8672 2.14062 13.8672 3.30371V4.35547H9.15332H4.44238L4.36328 4.41699C4.26074 4.49902 4.25781 4.65137 4.36035 4.75097L4.43067 4.82422H9.15039H13.8672V7.70117C13.8672 10.5488 13.8672 10.5781 13.8057 10.7012C13.7705 10.7773 13.7002 10.8564 13.6387 10.8945C13.5332 10.959 13.5039 10.9619 12.6074 10.9766L11.6816 10.9912L11.4883 11.0879C11.2598 11.1992 11.1104 11.3633 11.0225 11.5918C10.9727 11.7236 10.9668 11.8203 10.9668 12.5615C10.9668 13.0625 10.9551 13.4316 10.9346 13.5107C10.8877 13.6924 10.7354 13.8359 10.5449 13.877C10.4424 13.8975 9.05078 13.9062 6.08887 13.9004L1.78223 13.8916L1.6416 13.8213C1.48926 13.748 1.37207 13.6133 1.31055 13.4463C1.27832 13.3555 1.27246 12.5586 1.26953 9.07812V4.82422H2.49707C3.65723 4.82422 3.72754 4.82129 3.79199 4.76855C3.88867 4.68945 3.88867 4.49023 3.79199 4.41113C3.72754 4.3584 3.65723 4.35547 2.49707 4.35547H1.26953V3.30371C1.26953 2.14062 1.27832 2.08496 1.4541 1.89746C1.62988 1.71289 1.71777 1.68945 2.31543 1.68945H2.8457L2.85742 2.12304ZM12.4756 12.5C11.8984 13.0771 11.4238 13.5488 11.4209 13.5459C11.4209 13.543 11.4268 13.1387 11.4355 12.6465C11.4502 11.7793 11.4531 11.75 11.5146 11.6621C11.5527 11.6094 11.6377 11.542 11.7051 11.5068C11.8252 11.4482 11.875 11.4453 12.6807 11.4453H13.5303L12.4756 12.5ZM13.8379 14.2842C13.7939 14.4541 13.6533 14.624 13.4951 14.7002L13.3545 14.7705L7.67383 14.7793C3.90625 14.7822 1.9375 14.7764 1.8291 14.7559C1.74121 14.7383 1.61817 14.6943 1.55664 14.6533C1.44531 14.5801 1.31934 14.3926 1.28711 14.252L1.26953 14.1729L1.43652 14.252L1.60645 14.3311H6.38184H11.1572L11.333 14.2344C11.4736 14.1582 11.752 13.8975 12.6807 12.9687L13.8525 11.7969L13.8613 12.9863C13.8643 13.7187 13.8555 14.2168 13.8379 14.2842Z'
                    fill='#14A800'
                  />
                  <path
                    d='M2.35352 5.72656C2.28906 5.76172 2.22461 5.8291 2.18652 5.9082C2.12207 6.03125 2.11914 6.07227 2.11914 6.6377C2.11914 7.33203 2.14258 7.42871 2.35059 7.54297C2.45605 7.60449 2.5 7.60742 3.0918 7.60742C3.77734 7.60742 3.85059 7.59277 3.97949 7.41992C4.03516 7.34375 4.03809 7.29688 4.03809 6.64062C4.03809 5.97852 4.03516 5.9375 3.97656 5.8584C3.85352 5.68848 3.78027 5.67383 3.08594 5.67383C2.53223 5.67383 2.44141 5.67969 2.35352 5.72656ZM3.58398 6.64062V7.13867H3.08594H2.58789V6.64062V6.14258H3.08594H3.58398V6.64062Z'
                    fill='#14A800'
                  />
                  <path
                    d='M5.3477 5.72363C5.29497 5.75 5.22173 5.81152 5.18657 5.86133C5.12505 5.94629 5.12212 5.98438 5.11333 6.60254C5.10454 7.21191 5.10747 7.25879 5.16606 7.37012C5.27446 7.58691 5.35649 7.60742 6.0772 7.60742C6.76274 7.60742 6.83891 7.59277 6.96196 7.41992C7.02348 7.33203 7.02641 7.30566 7.02641 6.63477C7.02641 5.98145 7.02348 5.9375 6.96489 5.8584C6.84184 5.68848 6.7686 5.67383 6.07427 5.67383C5.55278 5.67383 5.4268 5.68262 5.3477 5.72363ZM6.57231 6.64062V7.13867H6.07427H5.57622V6.64062V6.14258H6.07427H6.57231V6.64062Z'
                    fill='#14A800'
                  />
                  <path
                    d='M8.33301 5.72656C8.27734 5.75293 8.2041 5.81445 8.17188 5.8584C8.11328 5.9375 8.11035 5.98145 8.11035 6.63477C8.11035 7.30566 8.11328 7.33203 8.1748 7.41992C8.29785 7.59277 8.37402 7.60742 9.05957 7.60742C9.78027 7.60742 9.8623 7.58691 9.9707 7.37012C10.0293 7.25879 10.0322 7.21191 10.0234 6.60254C10.0146 5.98438 10.0117 5.94629 9.9502 5.86133C9.82715 5.68848 9.75391 5.67383 9.05664 5.67383C8.52051 5.67383 8.41797 5.67969 8.33301 5.72656ZM9.56055 6.64062V7.13867H9.0625H8.56445V6.64062V6.14258H9.0625H9.56055V6.64062Z'
                    fill='#14A800'
                  />
                  <path
                    d='M11.3213 5.72656C11.2656 5.75293 11.1924 5.81445 11.1602 5.8584C11.1016 5.9375 11.0986 5.97852 11.0986 6.64062C11.0986 7.29688 11.1016 7.34375 11.1572 7.41992C11.2861 7.59277 11.3594 7.60742 12.0449 7.60742C12.6367 7.60742 12.6807 7.60449 12.7861 7.54297C12.9941 7.42871 13.0176 7.33203 13.0176 6.6377C13.0176 6.07227 13.0146 6.03125 12.9531 5.9082C12.8389 5.68848 12.7832 5.67383 12.0508 5.67383C11.5088 5.67383 11.4062 5.67969 11.3213 5.72656ZM12.5488 6.64062V7.13867H12.0508H11.5527V6.64062V6.14258H12.0508H12.5488V6.64062Z'
                    fill='#14A800'
                  />
                  <path
                    d='M2.32418 8.46275C2.12789 8.59752 2.11617 8.65611 2.12496 9.3856C2.13375 9.98912 2.13668 10.0419 2.19527 10.1151C2.34176 10.3143 2.35348 10.3172 3.05074 10.326C3.66891 10.3348 3.68941 10.3348 3.81539 10.2674C4.03805 10.1473 4.0527 10.0946 4.0527 9.35045C4.0527 8.62974 4.04098 8.57701 3.84176 8.45689C3.75387 8.40416 3.69234 8.3983 3.08297 8.3983C2.4443 8.3983 2.41793 8.40123 2.32418 8.46275ZM3.58395 9.3651V9.86314H3.0859H2.58785V9.3651V8.86705H3.0859H3.58395V9.3651Z'
                    fill='#14A800'
                  />
                  <path
                    d='M5.30957 8.46582C5.125 8.58887 5.10742 8.66211 5.10742 9.34766C5.10742 9.90723 5.11328 9.97168 5.16895 10.0859C5.21289 10.1768 5.2627 10.2266 5.35352 10.2705C5.46484 10.3262 5.53223 10.332 6.07422 10.332C6.76562 10.332 6.8623 10.3086 6.97656 10.1006C7.03809 9.99512 7.04102 9.95117 7.04102 9.3623C7.04102 8.65918 7.02637 8.58887 6.83887 8.46582C6.74219 8.40137 6.71582 8.39844 6.07422 8.39844C5.43262 8.39844 5.40625 8.40137 5.30957 8.46582ZM6.57227 9.36523V9.86328H6.07422H5.57617V9.36523V8.86719H6.07422H6.57227V9.36523Z'
                    fill='#14A800'
                  />
                  <path
                    d='M8.29785 8.46582C8.11035 8.58887 8.0957 8.65918 8.0957 9.3623C8.0957 9.95117 8.09863 9.99512 8.16016 10.1006C8.27441 10.3086 8.37109 10.332 9.0625 10.332C9.60449 10.332 9.67188 10.3262 9.7832 10.2705C9.87402 10.2266 9.92383 10.1768 9.96777 10.0859C10.0234 9.97168 10.0293 9.90723 10.0293 9.34766C10.0293 8.66211 10.0117 8.58887 9.82715 8.46582C9.73047 8.40137 9.7041 8.39844 9.0625 8.39844C8.4209 8.39844 8.39453 8.40137 8.29785 8.46582ZM9.56055 9.36523V9.86328H9.0625H8.56445V9.36523V8.86719H9.0625H9.56055V9.36523Z'
                    fill='#14A800'
                  />
                  <path
                    d='M11.3213 8.50977C11.2656 8.53613 11.1924 8.59766 11.1602 8.6416C11.1016 8.7207 11.0986 8.76172 11.0986 9.42383C11.0986 10.0801 11.1016 10.127 11.1572 10.2031C11.2861 10.376 11.3594 10.3906 12.0449 10.3906C12.6367 10.3906 12.6807 10.3877 12.7861 10.3262C12.9941 10.2119 13.0176 10.1152 13.0176 9.4209C13.0176 8.85547 13.0146 8.81445 12.9531 8.69141C12.8389 8.47168 12.7832 8.45703 12.0508 8.45703C11.5088 8.45703 11.4062 8.46289 11.3213 8.50977ZM12.5488 9.42383V9.92188H12.0508H11.5527V9.42383V8.92578H12.0508H12.5488V9.42383Z'
                    fill='#14A800'
                  />
                  <path
                    d='M2.32129 11.1904C2.13672 11.3135 2.11914 11.3867 2.11914 12.0752C2.11914 12.7637 2.13672 12.8369 2.32129 12.96C2.41797 13.0244 2.44141 13.0273 3.10352 13.0273H3.7832L3.87695 12.9512C4.04395 12.8076 4.05273 12.7695 4.05273 12.0752C4.05273 11.3809 4.04395 11.3428 3.87695 11.1992L3.7832 11.123H3.10352C2.44141 11.123 2.41797 11.126 2.32129 11.1904ZM3.58398 12.0752V12.5879H3.08594H2.58789V12.0752V11.5625H3.08594H3.58398V12.0752Z'
                    fill='#14A800'
                  />
                  <path
                    d='M5.3125 11.1874C5.125 11.3133 5.10742 11.3837 5.10742 12.0751C5.10742 12.7665 5.125 12.8368 5.3125 12.9628C5.41211 13.0301 5.42383 13.0301 6.10645 13.0213L6.80078 13.0126L6.88281 12.9393C7.02637 12.8045 7.04102 12.7284 7.04102 12.0751C7.04102 11.4217 7.02637 11.3456 6.88281 11.2108L6.80078 11.1376L6.10645 11.1288C5.42383 11.12 5.41211 11.12 5.3125 11.1874ZM6.57227 12.0751V12.5878H6.07422H5.57617V12.0751V11.5624H6.07422H6.57227V12.0751Z'
                    fill='#14A800'
                  />
                  <path
                    d='M8.34473 11.1522C8.26562 11.1844 8.16602 11.2958 8.12793 11.3954C8.11035 11.4422 8.0957 11.5829 8.0957 11.7118C8.0957 11.9227 8.10449 11.952 8.16895 12.0165C8.21289 12.0633 8.27441 12.0897 8.33008 12.0897C8.38574 12.0897 8.44727 12.0633 8.49121 12.0165C8.55566 11.9549 8.56445 11.9198 8.56445 11.7528V11.5624H9.0625H9.56055V12.0751V12.5878H9.06543H8.57031L8.55273 12.5145C8.54102 12.4676 8.49414 12.4208 8.43262 12.3915C8.33594 12.3446 8.32422 12.3446 8.22754 12.3915C8.05469 12.4735 8.05176 12.7137 8.22754 12.9042L8.32422 13.0126L9.02441 13.0213C9.71289 13.0301 9.72461 13.0301 9.82422 12.9628C10.0117 12.8368 10.0293 12.7665 10.0293 12.0751C10.0293 11.3866 10.0117 11.3133 9.82715 11.1903C9.73047 11.1258 9.70703 11.1229 9.06543 11.1258C8.70215 11.1258 8.37695 11.1376 8.34473 11.1522Z'
                    fill='#14A800'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_162_5868'>
                    <rect
                      width='15'
                      height='15'
                      fill='white'
                      transform='translate(0.0683594 0.224609)'
                    />
                  </clipPath>
                </defs>
              </svg>
              Project Manager
            </p>
            <div className='flex-between-center'>
              <p className='previous'>Previously at</p>
              <img src={loginCardLogo} alt='' />
            </div>
          </div>
        </Grid>
      </Grid>
    </div >
  );
};

export default Login;
