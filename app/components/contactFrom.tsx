// /components/contactFrom.tsx
'use client';

// import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {

    // const { register, handleSubmit, formState: { errors } } =useForm<FormData>();

    // const onSubmit: SubmitHandler<FormData> = (data) => {
    //     console.log('Form submitted:', data);
    //};

    return (
        <form>
            {/* <input {...register('name', {required: true})} type='text' placeholder='Name'> */}
                {/* {errors.name && <span>This field is required</span>} */}
            {/* </input> */}
            {/* <input {...register('email', {required: true, pattern: /^\S+@\S+$/i})} type='email' placeholder='Email'> */}
                {/* {errors.email && <span>Invalid email address</span>} */}
            {/* </input> */}
            {/* <textarea {...register('message', {required: true})} placeholder='Message Here' > */}
            {/* </textarea> */}
            <button type='submit'>
                Send
            </button>
        </form>
    )
}