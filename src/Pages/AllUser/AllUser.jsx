import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = UseAxiosPublic();
    const { data , refetch} = useQuery({
        queryKey : ['user'],
        queryFn : async () =>{
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    })
    const handleDeleteUser = (_id) => {
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
                      axiosSecure.delete(`/user/${_id}`)
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
    }    
    return (
        <div>
            <div className="flex justify-between items-center mt-4">
                <h2 className="md:text-4xl text-xl font-semibold">Total User : </h2>
                <h2 className="md:text-4xl text-xl font-semibold">Total Price : </h2>
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
                                <th>User Image</th>
                                <th>User Name</th>
                                <th>User email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) && data.map(item => <tr key={item._id || item.email}>
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
                                                    src={item.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <th>
                                    <p>icon</p>
                                </th>
                                <th>
                                    <p onClick={() => handleDeleteUser(item._id)}>icon</p>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;