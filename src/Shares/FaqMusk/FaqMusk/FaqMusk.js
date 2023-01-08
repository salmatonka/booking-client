import React from 'react';
import './FaqMusk.css';
const FaqMusk = () => {
    return (
        <div className='faq'>
            <div className="dark:bg-gray-800 dark:text-gray-100">
	      <div className="container flex flex-col justify-center  py-8 ">
		   <h2 className="text-2xl font-semibold sm:text-4xl">FAQs about Musk Hotel</h2>
		   <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		  <div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is there to do at Musk Hotel?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Musk Hotel offers the following activities / services (charges may apply):

               Massage
               Full body massage</p>
			</details>
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How much does it cost to stay at Musk Hotel?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The prices at Musk Hotel may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How far is Musk Hotel from the centre of lstanbul?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Musk Hotel is 4 km from the centre of Istanbul. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the check-in and check-out times at Musk Hotel?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Check-in at Musk Hotel is from 14:00, and check-out is until 14:00.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What type of room can i book at Musk Hotel?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Room options at Musk Hotel include:

                Double
                Twin</p>
			</details>
		</div>

	{/* Musk Hotel */}
		<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<p className="text-2xl font-bold">Travellers who looked at Musk Hotel ended up booking these properties</p>
			
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-400">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-400">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dtext-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline :text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-400">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline :text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-violet-400">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
	</div>
</div>
        </div>
    );
};

export default FaqMusk;