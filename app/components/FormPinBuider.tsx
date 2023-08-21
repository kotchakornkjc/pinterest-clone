import React from 'react'
import { HiEllipsisHorizontal } from "react-icons/hi2";

const FormPinBuider = () => {
  return (
    <div className="bg-white rounded-2xl p-10 gap-3">
      <div className="flex flex-row justify-between items-center">
        <div className="hover:bg-gray-200 rounded-full cursor-pointer">
          <HiEllipsisHorizontal className="text-[30px] text-gray-500" />
        </div>
        <button className="bg-red-600 text-white p-2 rounded-lg">
          บันทึก
        </button>
      </div>

      <div className="grid grid-cols-3 pt-2 gap-4">
        <div className="bg-gray-100 rounded-lg h-[480px] outline-dashed outline-2 outline-gray-300 outline-offset-[-16px]">
          <p>cdk</p>
        </div>
        <div className="col-span-2 bg-sky-300">
        <p>cdk</p>
        </div>
      </div>
    </div>
  )
}

export default FormPinBuider