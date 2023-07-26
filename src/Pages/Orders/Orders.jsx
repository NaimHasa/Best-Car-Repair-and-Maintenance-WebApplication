import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';


const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

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
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrdersRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}

                        >

                        </OrdersRow>)
                    }

                </tbody>

            </table>
        </div >

    );
};

export default Orders;