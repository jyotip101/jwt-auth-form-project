<!-- Please update value in the {}  -->

<!-- <h1 align="center">jwt-auth-form-project</h1> -->

  <h3>
    <a href="https://jyotip101.github.io/jwt-auth-form-project/">
      Demo
    </a>
     
  </h3>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)

<!-- OVERVIEW -->

## Overview

<!--
Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:
 I have hosted my project on Github pages here you can see the demo.
while building this website I have learned responsive design and practiced my SCSS skillls
- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :) -->

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

```

After cloneing this repository open `index.html` file in browser

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->
<!--
- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/) -->

jwt is json oject which manily use to autontice user.
 
 
A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
The token is mainly composed of header, payload, signature.

1. header
   the header contant two part the one is type of the token which is JWT, and other is the signing algorithm being used, such as HMAC SHA256 or RSA.
   for eg:
   {
   "alg": "HS256",
   "typ": "JWT"
   }
   "alg" is for algorithem (Signature or encryption algorithem)
   "typ" for Type of token
   Then, this JSON is Base64Url encoded to form the first part of the JWT.
2. paylod
   paylod contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

    This information is typically used by the server to verify that the user has permission to perform the action they are requesting

   {
   "sub": "1234567890",
   "name": "John Doe",
   "iat": 1516239022
   }

"sub" - subject (whome the token refers to)
"name" is user name (or the ID of the user)
"iat" for issued at (experiey date)
And this JSON is Base64Url encoded to form the second part of the JWT.

3. verify signature
For createing this you need the encoded header,  the encoded paylod , secreat
HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),

your-256-bit-secret

)
JSON Web Token (JWT) is a standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. The compact size makes the tokens easy to transfer through an URL, POST parameter, or inside an HTTP header. The information in a JWT is digitally signed using a secret or public/private key pair.

JWTs can be signed using a secret or a public/private key pair.

JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.
/////
How does JWT authentication work?
In short, JWTs are used as a secure way to authenticate users and share information. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer
///What is a JWT? JSON Web Tokens are an open and standard (RFC 7519) way for you to represent your user's identity securely during a two-party interaction. That is to say, when two systems exchange data you can use a JSON Web Token to identify your user without having to send private credentials on every request

JSON Web Token (JWT) is a compact, URL-safe means of representing
claims to be transferred between two parties. The claims in a JWT
are encoded as a JSON object that is used as the payload of a JSON
Web Signature (JWS) structure or as the plaintext of a JSON Web
Encryption (JWE) structure, enabling the claims to be digitally
signed or integrity protected with a Message Authentication Code
(MAC) and/or encrypted.
