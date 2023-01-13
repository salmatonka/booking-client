import React from 'react';
import Navber from '../../../Shares/Navber/Navber/Navber';
import Footer from '../../../Shares/Footer/Footer/Footer';
const Login = () => {
    return (
        <div>
			<Navber />
            <section className=" dark:bg-gray-800 dark:text-gray-100">
               <div>
                   <img src="https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg" alt="" className="object-cover w-full h-40  xl:col-span-3 dark:bg-gray-500" />
               </div>

	           <div className="px-40 mx-auto text-center ">
		            <div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			
			           <h1 className="text-5xl font-extrabold dark:text-gray-50">LogIn</h1>
			           <p className="my-8">Modular and versatile Fugit vero facilis dolor sit neque cupiditate
                       <br /> minus esse accusamus cumque at.
			          </p>
			            <form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				            
				            <div>
					           <label for="email" className="text-sm sr-only">Email address</label>
					           <input name='email' id="email" type="email" placeholder="Email address" className="w-80 rounded-md input input-bordered focus:ring focus:ring-violet-400 border-gray-700" required/>
				           </div>
				            <div>
					           <label for="password" className="text-sm sr-only">Email address</label>
					           <input name='password' id="password" type="password" placeholder="Password" className="w-80 rounded-md input input-bordered focus:ring focus:ring-violet-400 border-gray-700" required/>
				           </div>
						   <div>
				               <input id="password" value="LogIn" type="submit"  className="w-80 rounded-md input input-bordered focus:ring bg-gray-700 focus:ring-violet-400 border-gray-700 text-gray-100" required/>
			               </div>
			           </form>
		          </div>
		       </div>
          </section>
               <Footer />
       </div>
      
    );
};

export default Login;