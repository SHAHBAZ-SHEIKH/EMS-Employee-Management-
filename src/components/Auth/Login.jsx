import React,{ useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(!email || !password){
            return console.log('Please Enter Email and Password')
        }
        if(email.trim() === '' || password.trim() === ''){
            return console.log('Please Fill Email and Password')
        }

        handleLogin(email,password)
        setEmail('')
        setPassword('')
            
        
    }


  return (
    <div className='flex w-screen h-screen justify-center items-center'>
        <div className='border-2 border-emerald-500 p-20 rounded'>
            <form onSubmit={submitHandler} className='flex flex-col justify-center items-center'>
                <input value={email} onChange={(e) => setEmail(e.target.value)}  className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-500' type="email"  placeholder='Enter Your Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 border-emerald-600 rounded-full mt-3 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-500' type="text"  placeholder='Enter Your Password' />
                <button className='border-none w-[250px] mt-5 bg-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-500'>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login
