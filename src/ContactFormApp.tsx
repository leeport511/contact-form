function ContactFormApp() {
	return (
		<main className='font-karla bg-green200 w-screen h-screen overscroll-y-none overflow-x-scroll flex justify-center px-8 py-4'>
			<section className='w-[343px] bg-white flex flex-col rounded-2xl p-6 text-grey900  tracking-[-1px]'>
				<h1 className='text-left text-[32px] font-bold'>
					Contact Us
				</h1>
				<div>
					<label htmlFor='firstName'>First Name</label>
					<input type='text' />
				</div>
			</section>
		</main>
	);
}

export default ContactFormApp;
