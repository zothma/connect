import Skeleton from "../common/Skeleton"
import SkeletonElement from "../common/SkeletonElement"

export default function AdvertCardSkeleton() {
  return (
    <Skeleton className="h-80 min-w-[320px] transition-transform rounded-[30px]">
      {/* Flex block */}
      <div className="h-full w-full flex flex-col gap-6 p-5">
        <div className="w-full flex justify-between">
          <SkeletonElement height={40} width={200} />
          <SkeletonElement height={40} width={40} />
        </div>

        <div className="flex flex-col gap-4 grow">
          <SkeletonElement height={30} width={300} />
          <SkeletonElement height={25} width={270} />
          <SkeletonElement height={17} width={350} />
          <SkeletonElement height={17} width={200} />
        </div>

        <SkeletonElement height={56} width={180} />
      </div>
    </Skeleton>
  )
}