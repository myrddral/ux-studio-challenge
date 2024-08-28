export default function Loading() {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full scale-75 items-center justify-center">
      <div className="text-gray-700 flex items-center justify-center space-x-1 text-sm">
        <div className="loader"></div>
      </div>
    </div>
  )
}
