const AddNewItem = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-[#C73450]">
        Add Item By User
      </h1>
      <form className="mt-10">
        <div>
          <label>Recipe name*</label>
          <input type="text" placeholder="Type here" className="input w-full" />
        </div>
        <div className="flex  gap-2 md:flex-row   md:gap-4 mt-2">
          <div className="w-full">
            <label htmlFor="">Category*</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Price*</label>
            <input
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
              className="textarea h-24 w-full"
              placeholder="Recipe Details"
            ></textarea>
          </fieldset>
        </div>
        <div className="mt-2">
          <input type="file" className="file-input file-input-ghost" />
        </div>
        <div className="mt-2">
        <button type="submit" className="btn">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
