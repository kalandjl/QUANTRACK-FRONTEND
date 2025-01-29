export default function DashboardVolunteersLoading() {
    
    // Interable arr with length 12
    let arr = Array.apply(null, Array(12)).map(function (x, i) { return i; })


    return (
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="mb-10">
          <div className="h-8 w-48 bg-zinc-800 rounded-lg"></div>
        </div>
  
        <div className="grid grid-col grid-cols-4 gap-10 pr-32">
            {arr.map((x,i) => (
                <div key={i} className="w-full h-full grid gap-4">
                    <div className="bg-zinc-800 h-64 rounded-lg"></div>
                    <div>
                        <div className="w-1/3 h-8 rounded-md bg-zinc-800 mb-2"></div>
                        <div className="w-1/3 h-8 rounded-md bg-zinc-800"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    )
  } 