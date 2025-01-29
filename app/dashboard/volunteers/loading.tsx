export default function DashboardLoading() {
    return (
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 w-48 bg-zinc-800 rounded-lg"></div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left column */}
          <div className="space-y-4 md:space-y-6">
            {/* Stats cards skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="h-[160px] bg-zinc-800/50 rounded-lg"></div>
              <div className="h-[160px] bg-zinc-800/50 rounded-lg"></div>
            </div>
  
            {/* Event sections skeleton */}
            <div className="space-y-4 md:space-y-6">
              <div className="h-[200px] bg-zinc-800/50 rounded-lg"></div>
              <div className="h-[200px] bg-zinc-800/50 rounded-lg"></div>
            </div>
          </div>
  
          {/* Right column */}
          <div className="space-y-4 md:space-y-6">
            <div className="h-[300px] bg-zinc-800/50 rounded-lg"></div>
            <div className="h-[300px] bg-zinc-800/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  } 