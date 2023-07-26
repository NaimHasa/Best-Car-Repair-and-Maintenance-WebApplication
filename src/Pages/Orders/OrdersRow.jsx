import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete }) => {
    const { _id, price, serviceName, customarName, phone, message, service } = order;
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))

    }, [service])

    return (
        <>

            <tr>
                <th>
                    <label onClick={() => handleDelete(_id)}>
                        <button className='btn btn-outline text-cyan-200'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-16 h-16">
                                {
                                    orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                                }

                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {
                        customarName
                    }
                </td>
                <td>

                    <br />
                    <span className="badge badge-ghost badge-sm">$ {price}</span>
                </td>
                <td>{phone}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">{message}</button>
                </th>
            </tr >
        </>
    );
};

export default OrdersRow;