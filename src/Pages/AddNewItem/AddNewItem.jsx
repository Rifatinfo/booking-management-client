import { useForm } from "react-hook-form"
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
const hosting_image_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
console.log(hosting_image_key);

const image_hosting_api = `https://api.imgbb.com/1/upload?key=e5264e7b07636aa10c758ebfbbd30940`
const AddNewItem = () => {
    const usePublic = UseAxiosPublic();
    
    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = async (data) => {
        const imageFile = new FormData();
        imageFile.append("image", data.image[0]);
    
        try {
          const res = await usePublic.post(image_hosting_api, imageFile, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res.data);
        } catch (error) {
          console.error("Image upload failed:", error);
        }
      };
    
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-[#C73450]">
        Add Item By User
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div>
          <label>Recipe name*</label>
          <input  {...register("recipe")} type="text" placeholder="Type here" className="input w-full" />
        </div>
        <div className="flex  gap-2 md:flex-row   md:gap-4 mt-2">
          <div className="w-full">
            <label htmlFor="">Category*</label>
            <input
              {...register("category")}
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Price*</label>
            <input
              {...register("price")}
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea
              {...register("recipeDetails")}
              className="textarea h-24 w-full"
              placeholder="Recipe Details"
            ></textarea>
          </fieldset>
        </div>
        <div className="mt-2">
          <input {...register("image")} type="file" className="file-input file-input-ghost" />
        </div>
        <div className="mt-2">
        <button type="submit" className="btn">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
