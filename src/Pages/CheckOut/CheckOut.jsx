import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const CheckOut = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fristName.value} ${form.lastName.value}`;
        const email = user?.email || 'No Register';
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customarName: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed successfully')
                    form.reset();
                }

            })
            .catch(err => console.error(err))

    }



    return (
        <div >
            <form onSubmit={handlePlaceOrder}>
                <h1 className='text-4xl text-center font-semibold '>You are about to Order: {title}</h1>
                <p className='text-2xl text-center font-bold'>Price: ${price}</p>
                <div className='bg-slate-100 p-4 rounded-xl mt-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 '>
                        <input type="text" name='fristName' placeholder="Frist Name" className="input input-bordered input-accent w-full " required />
                        <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-accent w-full " required />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-accent w-full" />
                        <input type="text" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered input-accent w-full " readOnly required />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-3 p-4" placeholder="Your Message" required></textarea>
                    <input name='submit' type="submit" className='btn bg-slate-500 w-full  font-extrabold mt-4 ' value="Place Your Order" required />
                </div>
            </form>


        </div>
    );
};

export default CheckOut;