function Feed() {
  return (
    <main className="flex flex-1 flex-col gap-8">
      {Array.from({ length: 8 }).map((_, index) => {
        return <div key={index} className="h-[37.5rem] rounded-md bg-gray-2" />
      })}
    </main>
  )
}

export default Feed
