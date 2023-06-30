import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrappre'>
            <div className='loginLeft'>
                <h3 className='loginLogo'> FaceBook </h3>
                <span className='loginDesc'>
                    Connect with friends and the world around you on FaceBook.
                </span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Uesrname' className='loginInput'/>
                    <input placeholder='Email' className='loginInput'/>
                    <input placeholder='Password' className='loginInput'/>
                    <input placeholder='Password Again' className='loginInput'/>
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegisterButton'>Log Into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
