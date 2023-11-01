# Node Server

End Points :
1. [POST] /user/login
    request body: { email: "", password: "" }
    response body: { email: "" }

2. [POST] /user/signup
    request body: { username: "", email: "", password: "" }
    response body: { username: "", email: "", password: "" }

3. [POST] /user/forgot-password
    request body: { email: "" }
    response body: { message: "Email sent" }

4. [POST] /user/reset-password
    request body: { email: "", password: "", confirmpassword: "", otp: "" }
    response body: { message: "Password changed" }

5. [GET] /user/get-details
    request body: none
    response body: { email: "" }

6. [GET] /logout
    request body: none
    response body: {}

Functionality :
1. On successful login, a JWT is returned and stored as cookies in the browser.
2. On Logout, JWT is cleared.
3. Signup does not Login. Login must be done separately.
4. Forgot password sends an OTP to the mail id.
5. Reset password verifies the OTP and updates the password.

Database :
-> MongoDB
-> opts, users [clusters]
-> Model is available at server/models

Before Execution :
Create a .env file under server directory.
add the following - 
    MONGODB_URI = [mongodb connection url]
    PORT = [server port number]
    SECRET = [secret code for jwt signing]
    CORS_ACCEPTED_ORIGIN_1 = [origin to accept CORS requests ex: http://localhost:3000]
    EMAIL_ADDRESS = [admin email address]
    EMAIL_PASSWORD = [admin password]