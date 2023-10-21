const DialogComponent = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="mb-3 text-xl font-bold text-[#4cb0af] font-Kanit">⚠️Hello user!</h3>

        <div className="text-xs font-bold capitalize md:text-[13px]">
          <p className="text-red-500 ">*jika jawaban tidak sesuai atau error laporkan melalui instagram saya</p>
          <p className="text-red-500 ">*(If the answer is not appropriate or has an error, please report it to my Instagram)</p>
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn dark:shadow-black  hover:text-black hover:bg-[#ebebeb] dark:text-slate-300 bg-[#4cb0af] text-[#F5F5F5] dark:hover:text-slate-500">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DialogComponent;
