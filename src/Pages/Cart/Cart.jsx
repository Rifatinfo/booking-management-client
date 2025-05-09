import UseCart from "../../hooks/UseCart";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const Cart = () => {
    const [cart, , refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = UseAxiosSecure();
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        console.log("Delete response:", res);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch(); // refetch your cart data here
                        } else {
                            Swal.fire({
                                title: "Failed",
                                text: "Item could not be deleted.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(err => {
                        console.error("Delete failed:", err);
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong!",
                            icon: "error"
                        });
                    });
            }
        });

        // console.log(_id);
        
    };

    return (
        <div>
            <div className="flex justify-between items-center mt-4">
                <h2 className="md:text-4xl text-xl font-semibold">Total Item : {cart.length}</h2>
                <h2 className="md:text-4xl text-xl font-semibold">Total Price : {totalPrice}</h2>
            </div>

            {/* all add to cart */}
            <div className="mt-4">
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th> price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <RiEdit2Fill className="text-3xl text-red-600" />
                                </th>
                                <th>
                                    <MdDelete onClick={() => handleDelete(item._id)} className="text-3xl text-red-600" />
                                </th>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;