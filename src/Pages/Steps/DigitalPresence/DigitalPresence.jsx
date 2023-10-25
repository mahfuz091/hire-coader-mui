/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import image2 from "../../../assets/Images/image2.png";
import uploadImage from "../../../assets/Images/upload-pp.png";

const DigitalPresence = () => {
  const inputref = useRef(null);
  const [image, setImage] = useState(image2);
  console.log(image);
  const handleImageClick = () => {
    inputref.current.click();
    console.log("Click");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='skill-mx-auto'>
      <div className='skill-container'>
        <h2 className='skill-title' style={{ textAlign: "center" }}>
          Digital Presence
        </h2>
        <form action='' className='form-digital'>
          <div
            style={{ margin: "0 auto", width: 160 }}
            className='form-group password'
          >
            <CardMedia
              style={{
                height: 160,
                width: 160,
                borderRadius: "50%",
                backgroundSize: "contain",
                margin: "0 auto",
              }}
              image={image}
              title='Uploaded Image'
            ></CardMedia>
            <div className='upload-pp'>
              <img
                onClick={handleImageClick}
                className='upload-pp'
                src={uploadImage}
                alt=''
                style={{ cursor: "pointer" }}
              />
              <input
                ref={inputref}
                onChange={handleImageUpload}
                type='file'
                hidden
              />
            </div>
          </div>
          <p className='add-pp'>Add Profile Picture</p>
          <div style={{ margin: "0 auto" }} className='form-group '>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #D5E9E5",
                mt: "32px",
                color: "#2563EB",
                py: "14px",
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='18'
                viewBox='0 0 19 18'
                fill='none'
              >
                <g clip-path='url(#clip0_1201_7388)'>
                  <path
                    d='M16 16H16.5V15.5V10.2C16.5 9.20279 16.1039 8.24641 15.3987 7.54128C14.6936 6.83614 13.7372 6.44 12.74 6.44C12.1307 6.44 11.473 6.65679 10.92 7.03063V6.63H10.42H7.63H7.13V7.13V15.5V16H7.63H10.42H10.92V15.5V10.57C10.92 10.0715 11.3208 9.67 11.81 9.67C12.0487 9.67 12.2776 9.76482 12.4464 9.9336C12.6152 10.1024 12.71 10.3313 12.71 10.57V15.5V16H13.21H16ZM5.77 16H6.27V15.5V7.13V6.63H5.77H3H2.5V7.13V15.5V16H3H5.77ZM16.5 0.5C16.8978 0.5 17.2794 0.658035 17.5607 0.93934C17.842 1.22064 18 1.60218 18 2V16C18 16.3978 17.842 16.7794 17.5607 17.0607C17.2794 17.342 16.8978 17.5 16.5 17.5H2.5C2.10218 17.5 1.72064 17.342 1.43934 17.0607C1.15804 16.7794 1 16.3978 1 16V2C1 1.60218 1.15804 1.22064 1.43934 0.93934C1.72064 0.658035 2.10218 0.5 2.5 0.5H16.5ZM4.38 6.06C4.95817 6.06 5.51266 5.83032 5.92149 5.42149C6.33032 5.01266 6.56 4.45817 6.56 3.88C6.56 2.67773 5.59 1.69 4.38 1.69C3.79918 1.69 3.24214 1.92073 2.83144 2.33144C2.42073 2.74214 2.19 3.29918 2.19 3.88C2.19 5.09 3.17773 6.06 4.38 6.06Z'
                    fill='#2563EB'
                    stroke='#2563EB'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1201_7388'>
                    <rect
                      width='18'
                      height='18'
                      fill='white'
                      transform='translate(0.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
              Linkedin
            </Button>
          </div>
          <div style={{ margin: "0 auto" }} className='form-group '>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #D5E9E5",
                mt: "24px",
                color: "#000",
                py: "14px",
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <g clip-path='url(#clip0_1201_2443)'>
                  <path
                    d='M4.23463 12.3483C4.89794 12.9056 5.70393 13.194 6.49776 13.3526C6.43723 13.4936 6.38632 13.6471 6.34709 13.8128C6.1374 13.8782 5.88001 13.9288 5.62097 13.9064C5.28313 13.8771 4.90692 13.7232 4.60095 13.1886L4.60033 13.1875L4.59293 13.1747C4.587 13.1646 4.57904 13.1513 4.56908 13.1353C4.54918 13.1034 4.52106 13.0603 4.48475 13.0097C4.4126 12.909 4.30555 12.7748 4.16339 12.6375C3.88268 12.3663 3.43357 12.0538 2.82491 12.0112L2.81257 12.0104L2.8002 12.0101L2.79 12.51C2.8002 12.0101 2.80005 12.0101 2.79989 12.0101L2.79956 12.0101L2.79883 12.0101L2.79711 12.0101L2.79267 12.01L2.77994 12.0099C2.76984 12.0099 2.75644 12.0101 2.74043 12.0105C2.70887 12.0113 2.66495 12.0134 2.61493 12.0184C2.53488 12.0265 2.36314 12.0483 2.20962 12.1331C2.12785 12.1783 2.00291 12.2677 1.93043 12.4301C1.85055 12.6091 1.8729 12.7881 1.93084 12.925C1.98338 13.0492 2.06735 13.1484 2.1455 13.2246C2.2274 13.3044 2.32835 13.3834 2.44547 13.4632L2.47716 13.4848L2.5035 13.4974C2.50354 13.4974 2.50357 13.4974 2.50361 13.4974C2.50879 13.5004 2.52143 13.508 2.54017 13.5209C2.57758 13.5468 2.63967 13.5947 2.7157 13.6716C2.8651 13.8226 3.07498 14.0927 3.25592 14.544C3.25754 14.5488 3.25938 14.5541 3.26144 14.5599C3.26867 14.5803 3.27869 14.6069 3.29192 14.6387C3.31832 14.7023 3.35782 14.7875 3.41382 14.8855C3.52546 15.0808 3.7059 15.3325 3.9837 15.5632C4.47082 15.9677 5.20201 16.2624 6.25 16.1631V17.0539C2.90768 15.904 0.5 12.7319 0.5 9C0.5 6.74566 1.39553 4.58365 2.98959 2.98959C3.77889 2.20029 4.71592 1.57419 5.74719 1.14702C6.77846 0.719859 7.88376 0.5 9 0.5C10.1162 0.5 11.2215 0.719859 12.2528 1.14702C13.2841 1.57419 14.2211 2.20029 15.0104 2.98959C15.7997 3.77889 16.4258 4.71592 16.853 5.74719C17.2801 6.77846 17.5 7.88376 17.5 9C17.5 12.7349 15.0973 15.9006 11.75 17.0568V14.634C11.75 14.1294 11.6547 13.6963 11.4979 13.3424C12.2904 13.185 13.095 12.9003 13.7579 12.3487C14.6758 11.5849 15.242 10.3794 15.242 8.55C15.242 7.53756 14.9266 6.69082 14.3771 5.99979C14.5067 5.52104 14.6277 4.62549 14.188 3.54635L14.1 3.33036L13.878 3.25899L13.725 3.735C13.878 3.25899 13.8775 3.25883 13.877 3.25868L13.8761 3.25836L13.874 3.25773L13.8698 3.25641L13.8603 3.25363C13.8537 3.25172 13.8462 3.2497 13.8379 3.24762C13.8214 3.24346 13.8016 3.23909 13.7788 3.23492C13.7329 3.22657 13.6747 3.2191 13.6037 3.21573C13.4615 3.20898 13.271 3.21882 13.0299 3.26919C12.5831 3.36253 11.9668 3.59407 11.1611 4.11271C10.4665 3.94089 9.728 3.856 9 3.856C8.272 3.856 7.53348 3.94089 6.83894 4.11271C6.03325 3.59407 5.41688 3.36253 4.97012 3.26919C4.72903 3.21882 4.53847 3.20898 4.39627 3.21573C4.32533 3.2191 4.26707 3.22657 4.22124 3.23492C4.19835 3.23909 4.17865 3.24346 4.1621 3.24762C4.15382 3.2497 4.14635 3.25172 4.13966 3.25363L4.13023 3.25641L4.12596 3.25773L4.12394 3.25836L4.12296 3.25868C4.12248 3.25883 4.122 3.25899 4.275 3.735L4.122 3.25899L3.89995 3.33036L3.81195 3.54635C3.37231 4.62549 3.49328 5.52104 3.62285 5.99979C3.07345 6.69081 2.758 7.53756 2.758 8.55C2.758 10.3746 3.32162 11.5813 4.23463 12.3483ZM2.82758 12.4916C2.8276 12.4916 2.82798 12.492 2.82865 12.4929L2.82758 12.4916Z'
                    fill='black'
                  />
                  <path
                    d='M4.23463 12.3483C4.89794 12.9056 5.70393 13.194 6.49776 13.3526C6.43723 13.4936 6.38632 13.6471 6.34709 13.8128C6.1374 13.8782 5.88001 13.9288 5.62097 13.9064C5.28313 13.8771 4.90692 13.7232 4.60095 13.1886L4.60033 13.1875L4.59293 13.1747C4.587 13.1646 4.57904 13.1513 4.56908 13.1353C4.54918 13.1034 4.52106 13.0603 4.48475 13.0097C4.4126 12.909 4.30555 12.7748 4.16339 12.6375C3.88268 12.3663 3.43357 12.0538 2.82491 12.0112L2.81257 12.0104L2.8002 12.0101L2.79 12.51C2.8002 12.0101 2.80005 12.0101 2.79989 12.0101L2.79956 12.0101L2.79883 12.0101L2.79711 12.0101L2.79267 12.01L2.77994 12.0099C2.76984 12.0099 2.75644 12.0101 2.74043 12.0105C2.70887 12.0113 2.66495 12.0134 2.61493 12.0184C2.53488 12.0265 2.36314 12.0483 2.20962 12.1331C2.12785 12.1783 2.00291 12.2677 1.93043 12.4301C1.85055 12.6091 1.8729 12.7881 1.93084 12.925C1.98338 13.0492 2.06735 13.1484 2.1455 13.2246C2.2274 13.3044 2.32835 13.3834 2.44547 13.4632L2.47716 13.4848L2.5035 13.4974C2.50354 13.4974 2.50357 13.4974 2.50361 13.4974C2.50879 13.5004 2.52143 13.508 2.54017 13.5209C2.57758 13.5468 2.63967 13.5947 2.7157 13.6716C2.8651 13.8226 3.07498 14.0927 3.25592 14.544C3.25754 14.5488 3.25938 14.5541 3.26144 14.5599C3.26867 14.5803 3.27869 14.6069 3.29192 14.6387C3.31832 14.7023 3.35782 14.7875 3.41382 14.8855C3.52546 15.0808 3.7059 15.3325 3.9837 15.5632C4.47082 15.9677 5.20201 16.2624 6.25 16.1631V17.0539C2.90768 15.904 0.5 12.7319 0.5 9C0.5 6.74566 1.39553 4.58365 2.98959 2.98959C3.77889 2.20029 4.71592 1.57419 5.74719 1.14702C6.77846 0.719859 7.88376 0.5 9 0.5C10.1162 0.5 11.2215 0.719859 12.2528 1.14702C13.2841 1.57419 14.2211 2.20029 15.0104 2.98959C15.7997 3.77889 16.4258 4.71592 16.853 5.74719C17.2801 6.77846 17.5 7.88376 17.5 9C17.5 12.7349 15.0973 15.9006 11.75 17.0568V14.634C11.75 14.1294 11.6547 13.6963 11.4979 13.3424C12.2904 13.185 13.095 12.9003 13.7579 12.3487C14.6758 11.5849 15.242 10.3794 15.242 8.55C15.242 7.53756 14.9266 6.69082 14.3771 5.99979C14.5067 5.52104 14.6277 4.62549 14.188 3.54635L14.1 3.33036L13.878 3.25899L13.725 3.735C13.878 3.25899 13.8775 3.25883 13.877 3.25868L13.8761 3.25836L13.874 3.25773L13.8698 3.25641L13.8603 3.25363C13.8537 3.25172 13.8462 3.2497 13.8379 3.24762C13.8214 3.24346 13.8016 3.23909 13.7788 3.23492C13.7329 3.22657 13.6747 3.2191 13.6037 3.21573C13.4615 3.20898 13.271 3.21882 13.0299 3.26919C12.5831 3.36253 11.9668 3.59407 11.1611 4.11271C10.4665 3.94089 9.728 3.856 9 3.856C8.272 3.856 7.53348 3.94089 6.83894 4.11271C6.03325 3.59407 5.41688 3.36253 4.97012 3.26919C4.72903 3.21882 4.53847 3.20898 4.39627 3.21573C4.32533 3.2191 4.26707 3.22657 4.22124 3.23492C4.19835 3.23909 4.17865 3.24346 4.1621 3.24762C4.15382 3.2497 4.14635 3.25172 4.13966 3.25363L4.13023 3.25641L4.12596 3.25773L4.12394 3.25836L4.12296 3.25868C4.12248 3.25883 4.122 3.25899 4.275 3.735L4.122 3.25899L3.89995 3.33036L3.81195 3.54635C3.37231 4.62549 3.49328 5.52104 3.62285 5.99979C3.07345 6.69081 2.758 7.53756 2.758 8.55C2.758 10.3746 3.32162 11.5813 4.23463 12.3483ZM2.82758 12.4916C2.8276 12.4916 2.82798 12.492 2.82865 12.4929L2.82758 12.4916Z'
                    fill='black'
                    fill-opacity='0.2'
                  />
                  <path
                    d='M4.23463 12.3483C4.89794 12.9056 5.70393 13.194 6.49776 13.3526C6.43723 13.4936 6.38632 13.6471 6.34709 13.8128C6.1374 13.8782 5.88001 13.9288 5.62097 13.9064C5.28313 13.8771 4.90692 13.7232 4.60095 13.1886L4.60033 13.1875L4.59293 13.1747C4.587 13.1646 4.57904 13.1513 4.56908 13.1353C4.54918 13.1034 4.52106 13.0603 4.48475 13.0097C4.4126 12.909 4.30555 12.7748 4.16339 12.6375C3.88268 12.3663 3.43357 12.0538 2.82491 12.0112L2.81257 12.0104L2.8002 12.0101L2.79 12.51C2.8002 12.0101 2.80005 12.0101 2.79989 12.0101L2.79956 12.0101L2.79883 12.0101L2.79711 12.0101L2.79267 12.01L2.77994 12.0099C2.76984 12.0099 2.75644 12.0101 2.74043 12.0105C2.70887 12.0113 2.66495 12.0134 2.61493 12.0184C2.53488 12.0265 2.36314 12.0483 2.20962 12.1331C2.12785 12.1783 2.00291 12.2677 1.93043 12.4301C1.85055 12.6091 1.8729 12.7881 1.93084 12.925C1.98338 13.0492 2.06735 13.1484 2.1455 13.2246C2.2274 13.3044 2.32835 13.3834 2.44547 13.4632L2.47716 13.4848L2.5035 13.4974C2.50354 13.4974 2.50357 13.4974 2.50361 13.4974C2.50879 13.5004 2.52143 13.508 2.54017 13.5209C2.57758 13.5468 2.63967 13.5947 2.7157 13.6716C2.8651 13.8226 3.07498 14.0927 3.25592 14.544C3.25754 14.5488 3.25938 14.5541 3.26144 14.5599C3.26867 14.5803 3.27869 14.6069 3.29192 14.6387C3.31832 14.7023 3.35782 14.7875 3.41382 14.8855C3.52546 15.0808 3.7059 15.3325 3.9837 15.5632C4.47082 15.9677 5.20201 16.2624 6.25 16.1631V17.0539C2.90768 15.904 0.5 12.7319 0.5 9C0.5 6.74566 1.39553 4.58365 2.98959 2.98959C3.77889 2.20029 4.71592 1.57419 5.74719 1.14702C6.77846 0.719859 7.88376 0.5 9 0.5C10.1162 0.5 11.2215 0.719859 12.2528 1.14702C13.2841 1.57419 14.2211 2.20029 15.0104 2.98959C15.7997 3.77889 16.4258 4.71592 16.853 5.74719C17.2801 6.77846 17.5 7.88376 17.5 9C17.5 12.7349 15.0973 15.9006 11.75 17.0568V14.634C11.75 14.1294 11.6547 13.6963 11.4979 13.3424C12.2904 13.185 13.095 12.9003 13.7579 12.3487C14.6758 11.5849 15.242 10.3794 15.242 8.55C15.242 7.53756 14.9266 6.69082 14.3771 5.99979C14.5067 5.52104 14.6277 4.62549 14.188 3.54635L14.1 3.33036L13.878 3.25899L13.725 3.735C13.878 3.25899 13.8775 3.25883 13.877 3.25868L13.8761 3.25836L13.874 3.25773L13.8698 3.25641L13.8603 3.25363C13.8537 3.25172 13.8462 3.2497 13.8379 3.24762C13.8214 3.24346 13.8016 3.23909 13.7788 3.23492C13.7329 3.22657 13.6747 3.2191 13.6037 3.21573C13.4615 3.20898 13.271 3.21882 13.0299 3.26919C12.5831 3.36253 11.9668 3.59407 11.1611 4.11271C10.4665 3.94089 9.728 3.856 9 3.856C8.272 3.856 7.53348 3.94089 6.83894 4.11271C6.03325 3.59407 5.41688 3.36253 4.97012 3.26919C4.72903 3.21882 4.53847 3.20898 4.39627 3.21573C4.32533 3.2191 4.26707 3.22657 4.22124 3.23492C4.19835 3.23909 4.17865 3.24346 4.1621 3.24762C4.15382 3.2497 4.14635 3.25172 4.13966 3.25363L4.13023 3.25641L4.12596 3.25773L4.12394 3.25836L4.12296 3.25868C4.12248 3.25883 4.122 3.25899 4.275 3.735L4.122 3.25899L3.89995 3.33036L3.81195 3.54635C3.37231 4.62549 3.49328 5.52104 3.62285 5.99979C3.07345 6.69081 2.758 7.53756 2.758 8.55C2.758 10.3746 3.32162 11.5813 4.23463 12.3483ZM2.82758 12.4916C2.8276 12.4916 2.82798 12.492 2.82865 12.4929L2.82758 12.4916Z'
                    stroke='black'
                  />
                  <path
                    d='M4.23463 12.3483C4.89794 12.9056 5.70393 13.194 6.49776 13.3526C6.43723 13.4936 6.38632 13.6471 6.34709 13.8128C6.1374 13.8782 5.88001 13.9288 5.62097 13.9064C5.28313 13.8771 4.90692 13.7232 4.60095 13.1886L4.60033 13.1875L4.59293 13.1747C4.587 13.1646 4.57904 13.1513 4.56908 13.1353C4.54918 13.1034 4.52106 13.0603 4.48475 13.0097C4.4126 12.909 4.30555 12.7748 4.16339 12.6375C3.88268 12.3663 3.43357 12.0538 2.82491 12.0112L2.81257 12.0104L2.8002 12.0101L2.79 12.51C2.8002 12.0101 2.80005 12.0101 2.79989 12.0101L2.79956 12.0101L2.79883 12.0101L2.79711 12.0101L2.79267 12.01L2.77994 12.0099C2.76984 12.0099 2.75644 12.0101 2.74043 12.0105C2.70887 12.0113 2.66495 12.0134 2.61493 12.0184C2.53488 12.0265 2.36314 12.0483 2.20962 12.1331C2.12785 12.1783 2.00291 12.2677 1.93043 12.4301C1.85055 12.6091 1.8729 12.7881 1.93084 12.925C1.98338 13.0492 2.06735 13.1484 2.1455 13.2246C2.2274 13.3044 2.32835 13.3834 2.44547 13.4632L2.47716 13.4848L2.5035 13.4974C2.50354 13.4974 2.50357 13.4974 2.50361 13.4974C2.50879 13.5004 2.52143 13.508 2.54017 13.5209C2.57758 13.5468 2.63967 13.5947 2.7157 13.6716C2.8651 13.8226 3.07498 14.0927 3.25592 14.544C3.25754 14.5488 3.25938 14.5541 3.26144 14.5599C3.26867 14.5803 3.27869 14.6069 3.29192 14.6387C3.31832 14.7023 3.35782 14.7875 3.41382 14.8855C3.52546 15.0808 3.7059 15.3325 3.9837 15.5632C4.47082 15.9677 5.20201 16.2624 6.25 16.1631V17.0539C2.90768 15.904 0.5 12.7319 0.5 9C0.5 6.74566 1.39553 4.58365 2.98959 2.98959C3.77889 2.20029 4.71592 1.57419 5.74719 1.14702C6.77846 0.719859 7.88376 0.5 9 0.5C10.1162 0.5 11.2215 0.719859 12.2528 1.14702C13.2841 1.57419 14.2211 2.20029 15.0104 2.98959C15.7997 3.77889 16.4258 4.71592 16.853 5.74719C17.2801 6.77846 17.5 7.88376 17.5 9C17.5 12.7349 15.0973 15.9006 11.75 17.0568V14.634C11.75 14.1294 11.6547 13.6963 11.4979 13.3424C12.2904 13.185 13.095 12.9003 13.7579 12.3487C14.6758 11.5849 15.242 10.3794 15.242 8.55C15.242 7.53756 14.9266 6.69082 14.3771 5.99979C14.5067 5.52104 14.6277 4.62549 14.188 3.54635L14.1 3.33036L13.878 3.25899L13.725 3.735C13.878 3.25899 13.8775 3.25883 13.877 3.25868L13.8761 3.25836L13.874 3.25773L13.8698 3.25641L13.8603 3.25363C13.8537 3.25172 13.8462 3.2497 13.8379 3.24762C13.8214 3.24346 13.8016 3.23909 13.7788 3.23492C13.7329 3.22657 13.6747 3.2191 13.6037 3.21573C13.4615 3.20898 13.271 3.21882 13.0299 3.26919C12.5831 3.36253 11.9668 3.59407 11.1611 4.11271C10.4665 3.94089 9.728 3.856 9 3.856C8.272 3.856 7.53348 3.94089 6.83894 4.11271C6.03325 3.59407 5.41688 3.36253 4.97012 3.26919C4.72903 3.21882 4.53847 3.20898 4.39627 3.21573C4.32533 3.2191 4.26707 3.22657 4.22124 3.23492C4.19835 3.23909 4.17865 3.24346 4.1621 3.24762C4.15382 3.2497 4.14635 3.25172 4.13966 3.25363L4.13023 3.25641L4.12596 3.25773L4.12394 3.25836L4.12296 3.25868C4.12248 3.25883 4.122 3.25899 4.275 3.735L4.122 3.25899L3.89995 3.33036L3.81195 3.54635C3.37231 4.62549 3.49328 5.52104 3.62285 5.99979C3.07345 6.69081 2.758 7.53756 2.758 8.55C2.758 10.3746 3.32162 11.5813 4.23463 12.3483ZM2.82758 12.4916C2.8276 12.4916 2.82798 12.492 2.82865 12.4929L2.82758 12.4916Z'
                    stroke='black'
                    stroke-opacity='0.2'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1201_2443'>
                    <rect width='18' height='18' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              Github
            </Button>
          </div>
          <div style={{ margin: "0 auto" }} className='form-group '>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #D5E9E5",
                mt: "24px",
                color: "#F7790B",
                py: "14px",
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='18'
                viewBox='0 0 19 18'
                fill='none'
              >
                <g clip-path='url(#clip0_1201_1432)'>
                  <path
                    d='M11.9132 2.2735L11.6153 1.87193L11.2137 2.1699L10.2934 2.85281L9.89188 3.15074L10.1898 3.55227L11.8869 5.8397L9.70849 4.02806L9.32387 3.70819L9.00419 4.09298L8.27668 4.96867L7.95735 5.35305L8.34154 5.6726L10.7245 7.65458L7.90832 6.33512L7.44878 6.11981L7.24031 6.5825L6.7654 7.63659L6.56257 8.08678L7.01019 8.29523L9.50876 9.4588L6.8187 8.89669L6.32998 8.79457L6.22715 9.28314L5.98969 10.4114L5.88657 10.9013L6.37667 11.0038L8.67558 11.4843H6.36H5.85999L5.86 11.9843L5.86005 13.1274L5.86006 13.6274H6.36005H12.0907H12.5907V13.1274V11.9843V11.7398L12.7489 10.9882V13.7856H5.71696V10.841V10.341H5.21696H4.07348H3.57348V10.841V15.4286V15.9286H4.07348H14.3919H14.8919V15.4286V10.8409V10.3409H14.3919H13.2489H12.9312L13.3473 9.4304L13.3734 9.3735L13.4552 9.275L14.1828 8.39898L14.2927 8.26672L14.304 8.25834L15.2244 7.57543L15.6259 7.2775L15.328 6.87596L11.9132 2.2735ZM1 1.92857C1 1.13998 1.63998 0.5 2.42857 0.5H16.5714C17.36 0.5 18 1.13998 18 1.92857V16.0714C18 16.86 17.36 17.5 16.5714 17.5H2.42857C1.63998 17.5 1 16.86 1 16.0714V1.92857Z'
                    fill='#F7790B'
                    stroke='#F7790B'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1201_1432'>
                    <rect
                      width='18'
                      height='18'
                      fill='white'
                      transform='translate(0.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
              StuckOverflow
            </Button>
          </div>
          <div className='check'>
            <Checkbox />{" "}
            <p>
              By Signing up you agree to our <a href='#'>Terms and Condition</a>{" "}
              and <a href='#'>Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DigitalPresence;