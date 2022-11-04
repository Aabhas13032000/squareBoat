import React from 'react';

//css
import './Login.css';

const Login = (props) => {

    async function formSubmit(event) {

        event.preventDefault();
        if(document.getElementById('email').classList.contains('is-invalid')){
            document.getElementById('email').classList.remove('is-invalid');
        }
        if(document.getElementById('email').classList.contains('error')){
            document.getElementById('email').classList.remove('error');
        }
        if(document.getElementById('password').classList.contains('is-invalid')){
            document.getElementById('password').classList.remove('is-invalid');
        }
        if(document.getElementById('password').classList.contains('error')){
            document.getElementById('password').classList.remove('error');
        }
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var data = {
            "email": email,
	        "password": password,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };

        fetch(`${props.baseUrl}/auth/login`, requestOptions).then(response => response.json()).then((result) => {
            console.log("success");
            if(result.message === "You are not registered" && !result.success) {
                if(!document.getElementById('email').classList.contains('is-invalid')){
                    document.getElementById('email').classList.add('is-invalid');
                }
                if(!document.getElementById('email').classList.contains('error')){
                    document.getElementById('email').classList.add('error');
                }
            } else if(result.message === "Wrong Email or Password" && !result.success) {
                if(!document.getElementById('email').classList.contains('error')){
                    document.getElementById('email').classList.add('error');
                }
                if(!document.getElementById('password').classList.contains('is-invalid')){
                    document.getElementById('password').classList.add('is-invalid');
                }
                if(!document.getElementById('password').classList.contains('error')){
                    document.getElementById('password').classList.add('error');
                }
            } else if(result.success) {
                props.onUpdateValue(true,result.data);
            }
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div className='login'>
            <div className='box'></div>
            <div className='login_form'>
                <h6>Login</h6>
                <form onSubmit={formSubmit} method='post'>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        <div id="emailValidation" className="invalid-feedback text-end">
                            Please enter a valid email address.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        <div id="passwordValidation" className="invalid-feedback text-end">
                            Incorrect email address or password.
                        </div>
                    </div>
                    <div className='button text-center'>
                        <button className='btn btn-primary' type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;