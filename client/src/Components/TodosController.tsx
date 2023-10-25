type Props = {
  len: number | undefined
}

export default function TodosController({ len }: Props) {
  return (
    <div className=" text-gray-light-text flex items-baseline justify-between py-3">
      <span className="pl-5">{len && len} items left</span>
      <div
        className={`absolute -bottom-20 lg:static w-full lg:w-auto gap-4 font-bold text-lg bg-white  shadow-lg lg:shadow-none p-3  rounded-lg flex-center`}
      >
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <span className="capitalize pr-5">cear completed</span>
    </div>
  )
}
