import React from 'react';
import Navber from '../../../Shares/Navber/Navber/Navber';
import Footer from '../../../Shares/Footer/Footer/Footer';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Register = () => {
    //   const handleRegister = event =>{
	// 	 event.preventDefault();
	// 	 const form = event.target;
	// 	 const name = form.name.value;
	// 	 const email = form.email.value;
	// 	 const password = form.password.value;
	// 	 console.log(name,email,password)
	//   }


    return (
		<div>
		<Navber />
		<section className=" dark:bg-gray-800 dark:text-gray-100">
		   <div>
			   <img src="https://cdn0.weddingwire.in/vendor/0854/3_2/960/jpg/weddingphotographer-snapclickers-bride-2_15_410854-165365380210914.jpeg" alt="" className="object-cover w-full h-60  xl:col-span-3 dark:bg-gray-500" />
		   </div>

		   <div className="px-40 mx-auto text-center ">
				<div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
		
				    <h1 className="text-4xl font-extrabold dark:text-gray-50">Register</h1>
				    <p className="my-8">Modular and versatile Fugit vero facilis dolor sit neque cupiditate
				    <br /> minus esse accusamus cumque at.</p>
					<form  novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
						<div>
							<label for="name" className="text-sm sr-only">Your name</label>
						    <input  name='name' id="name" type="text" placeholder="Your name" className="input input-bordered w-80 rounded-md focus:ring focus:ring-violet-400 border-gray-700" />
						</div>
						<div>
						   <label for="email" className="text-sm sr-only">Email address</label>
						   <input  name='email' id="email" type="email" placeholder="Email address" className="w-80 rounded-md input input-bordered focus:ring focus:ring-violet-400 border-gray-700" />
					   </div>
						<div>
						   <label for="password" className="text-sm sr-only">Password</label>
						   <input  name='password' id="password" type="password" placeholder="password" className="w-80 rounded-md input input-bordered focus:ring focus:ring-violet-400 border-gray-700" />
					   </div>

						<div className='flex justify-center  gap-10 '>
						<div><FcGoogle className='w-8 h-8'/></div>
						<div><FaFacebookF className='w-8 h-8'/></div>
						<div><FaGithub className='w-8 h-8'/></div>
						   
					   </div>

						<div>
				            <input id="password" value="Register" type="submit"  className="w-80 rounded-md input input-bordered focus:ring bg-gray-700 focus:ring-violet-400 border-gray-700 text-gray-100" />
					   </div>
						 
				   </form>
			  </div>
		   </div>
	  </section>
		   <Footer />
   </div> 
    );
};

export default Register;