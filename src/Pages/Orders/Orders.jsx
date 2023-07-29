import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';
import { useNavigate } from 'react-router-dom';


const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setOrders(data)
                }
                else {
                    navigate('/')
                }



            })
    }, [user?.email, navigate])

    const handleDelete = id => {
        const procced = window.confirm('Are U Sure ? You want to cancel Item')
        if (procced) {

            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfuly!")
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })



        }
    }
    const handleOrderConfirm = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = orders.filter(order => order._id !== id);
                    const update = orders.find(order => order._id === id);
                    update.status = 'confirm';
                    const newOrders = [update, ...remaining];
                    setOrders(newOrders)

                }


            })

    }






    return (
        <div className="overflow-x-auto bg-black rounded-md">
            <table className="table text-green-500">
                {/* head */}
                <thead className='text-white font-extrabold text-2xl'>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Product Name</th>
                        <th>Customar Name</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Order Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrdersRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleOrderConfirm={handleOrderConfirm}

                        >

                        </OrdersRow>)
                    }

                </tbody>

            </table>
        </div >

    );
};

export default Orders;