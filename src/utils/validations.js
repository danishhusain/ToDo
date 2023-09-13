
// import validator from 'is_js';

// const checkEmpty = (val, key) => {
//     if (validator.empty(val.trim())) {
//         return `${key}`;
//     } else {
//         return '';
//     }
// };

// const checkMinLength = (val, minLength, key) => {
//     if (val.trim().length < minLength) {
//         return `Please enter valid ${key}`;
//     } else {
//         return '';
//     }
// };

// export default function validateData(data) {
//     let error = '';
//     const {
//         firstName,
//         lastName,
//         userName,
//         email,
//         password,
//     } = data;
// console.log(email);
//     if (firstName !== undefined) {
//         let emptyValidationText = checkEmpty(firstName, 'Please enter your first name');
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             let minLengthValidation = checkMinLength(firstName, 2, 'first name');
//             if (minLengthValidation !== '') {
//                 return minLengthValidation;
//             }
//         }
//     }

//     if (lastName !== undefined) {
//         let emptyValidationText = checkEmpty(lastName, 'Please enter your last name');
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             let minLengthValidation = checkMinLength(lastName, 2, 'last name');
//             if (minLengthValidation !== '') {
//                 return minLengthValidation;
//             }
//         }
//     }
//     if (userName !== undefined) {
//         let emptyValidationText = checkEmpty(userName, 'Please enter your user name');
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             let minLengthValidation = checkMinLength(userName, 2, 'user name');
//             if (minLengthValidation !== '') {
//                 return minLengthValidation;
//             }
//         }
//     }

//     if (email !== undefined) {
//         let emptyValidationText = checkEmpty(email, 'Please enter your email');
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             if (!validator.email(email)) {
//                 return 'Please enter a valid email';
//             }
//         }
//     }

//     if (password !== undefined) {
//         let emptyValidationText = checkEmpty(password, 'Please enter a password');
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             let minLengthValidation = checkMinLength(password, 6, 'password');
//             if (minLengthValidation !== '') {
//                 return "Password requires a minimum of 6 characters";
//             }
//         }
//     }
// }

// import validator from 'is_js';

// const checkEmpty = (val, key) => {
//     if (validator.empty(val.trim())) {
//         return `${key}`;
//     } else {
//         return '';
//     }
// };

// const checkMinLength = (val, minLength, key) => {
//     if (val.trim().length < minLength) {
//         return `Please enter valid ${key}`;
//     } else {
//         return '';
//     }
// };

import React, { useState } from 'react'
import { Keyboard } from 'react-native';

export default function validateData({ ...props }) {
    const { name, email, password } = props;

    Keyboard.dismiss();
    let isValid = true;

    if (!email) {
        //   handleError('Please input email', 'email');
        console.log('Please input email', 'email')
        isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
        // handleError('Please input a valid email', 'email');
        console.log('Please input a valid email', 'email')

        isValid = false;
    }

    if (!name) {
        // handleError('Please input name', 'name');
        console.log('Please input name', 'name');
        isValid = false;
    }

    if (!password) {
        // handleError('Please input password', 'password');
        console.log('Please input password', 'password');
        isValid = false;
    } else if (password.length < 8) {
        // handleError('Min password length of 8', 'password');
        console.log('Min password length of 8', 'password');
        isValid = false;
    }
    if (isValid) {
        // signinwithemailandpassword();
        console.log(name, email, password);
    }

}
