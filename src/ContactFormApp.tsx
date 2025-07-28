import { Input } from '@heroui/input';
import { Form, Radio, RadioGroup } from '@heroui/react';
import type {
	InputStylesProps,
	RadioStylesProps,
} from './interfaces/interfaces';

const inputStyles: InputStylesProps = {
	label: 'text-grey900 text-base tracking-normal flex items-center gap-2 after:content-["*"] after:text-green600 ',
	input: [
		'!text-grey900',
		'text-lg',
		'!font-karla',
		'cursor-pointer',
		'tracking-[0.2px]',
	],
	innerWrapper: 'hover:bg-transparent',
	inputWrapper:
		'bg-transparent border-grey500 border-1 rounded-lg h-[51px] px-6 py-3  hover:border-green600 data-[hover=true]:bg-transparent data-[focus=true]:bg-green200 mb-6',
};

const radioStyles: RadioStylesProps = {
	base: 'border-1 max-w-full border-grey500 rounded-lg bg-indigo-300 px-6 py-3 mb-4 ml-0',
	wrapper: 'bg-red-300',
	label: 'bg-yellow-900',
};

function ContactFormApp() {
	return (
		<main className='font-karla bg-green200 w-screen h-screen overflow-x-scroll flex justify-center px-8 py-4'>
			<section className='w-[343px] bg-white flex flex-col rounded-2xl p-6 text-grey900  tracking-[-1px]'>
				<h1 className='text-left text-[32px] font-bold mb-8'>
					Contact Us
				</h1>

				<Form>
					<div className=' w-full'>
						<Input
							isRequired
							classNames={inputStyles}
							label='First Name'
							labelPlacement='outside-top'
							name='firstName'
							type='text'
						/>
						<Input
							isRequired
							classNames={inputStyles}
							label='Last Name'
							labelPlacement='outside-top'
							name='lastName'
							type='text'
						/>
						<Input
							isRequired
							classNames={inputStyles}
							label='Email Address'
							labelPlacement='outside-top'
							name='email'
							type='email'
						/>
					</div>
					<div className='w-full'>
						<RadioGroup
							label='Query Type'
							isRequired
							classNames={{
								label: 'text-grey900 text-base tracking-normal flex items-center gap-2 after:content-["*"] after:text-green600 mb-3',
								base: 'bg-green-700',
							}}
						>
							<Radio
								value='general-enquiry'
								classNames={radioStyles}
							>
								General Enquiry
							</Radio>
							<Radio
								value='support-request'
								classNames={radioStyles}
							>
								Support Request
							</Radio>
						</RadioGroup>
					</div>
				</Form>
			</section>
		</main>
	);
}

export default ContactFormApp;
