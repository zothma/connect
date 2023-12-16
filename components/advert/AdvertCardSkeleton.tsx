import Skeleton from "../common/Skeleton"

export default function AdvertCardSkeleton() {
  return (
    <Skeleton>
      <div className="flex flex-col h-[310px] border-2 rounded-[30px] p-1 bg-gray-100">
        <div className="flex flex-col justify-between grow shrink rounded-[26px] p-4 bg-gray-200">
          <div className="flex justify-between">
            <div className="bg-gray-100 h-10 w-44 rounded-full"></div>
            <div className="bg-gray-100 h-10 w-10 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-gray-300 h-7 w-60 rounded-md"></div>
            <div className="bg-gray-300 h-5 w-52 rounded-md"></div>
            <div>
              <div className="bg-gray-300 h-3 w-[90%] mb-4 rounded-md"></div>
              <div className="bg-gray-300 h-3 w-full rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="flex mx-4 my-3 gap-4">
          <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
          <div>
            <div className="bg-gray-200 h-3 w-36 mb-3 mt-1 rounded-md"></div>
            <div className="bg-gray-200 h-3 w-[90%] rounded-md"></div>
          </div>
        </div>
      </div>
    </Skeleton>
  )
}