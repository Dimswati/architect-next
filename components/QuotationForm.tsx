import { useForm } from 'react-hook-form'

import Button from "./Button"

type QuotationFormValues = {
    service: string
    name: string
    email: string
    phone: string
    message: string
}

const QuotationForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<QuotationFormValues>({
        defaultValues: {
            service: 'Wooden Flooring'
        }
    })

    const onSubmit = (values: QuotationFormValues) =>{
        console.log(values)
    }

  return (
    <form method="post" className="flex flex-col gap-y-4 p-5 border-2 border-neutral-200" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex sm:flex-row flex-col gap-y-4 sm:gap-x-4">
            <div className="w-full">
                <select {...register('service')}>
                    <option value="Texture Painting">Texture Painting</option>
                    <option value="Wooden Flooring">Wooden Flooring</option>
                    <option value="Interior Curtains">Interior Curtains</option>
                    <option value="Tile & Marble Work">Tile & Marble Work</option>
                    <option value="Furniture Work">Furniture Work</option>
                </select>
                <p>{errors.service?.message}</p>
            </div>
            <div className="w-full">
                <input type="text" placeholder="Your Name" {...register('name', {
                    required: {
                        value: true,
                        message: 'Your name is required'
                    } 
                })}/>
                <p>{errors.name?.message}</p>
            </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-y-4 sm:gap-x-4">
            <div className="w-full">
                <input type="email" {...register('email', {
                    required: {
                        value: true,
                        message: 'Your Email is required'
                    }
                })} placeholder="Your Mail"/>
                <p>{errors.email?.message}</p>
            </div>
            <div className="w-full">
                <input type="tel" {...register('phone', {
                    required: {
                        value: true,
                        message: 'Your Phone is required'
                    }
                })} placeholder="Phone Number"/>
            </div>
        </div>
        <textarea {...register('message')} placeholder="Message" className="resize-none h-full" rows={4}/>
        <Button type='submit' className="bg-neutral-800 hover:bg-orange-500">
            get quote
        </Button>
    </form>
  )
}

export default QuotationForm