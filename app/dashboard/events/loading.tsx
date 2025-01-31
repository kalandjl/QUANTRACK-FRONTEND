export default function DashboardEventsLoading() {
    
    // Interable arr with length 12
    let arr = Array.apply(null, Array(12)).map(function (x, i) { return i; })


    return (
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="mb-10">
          <div className="h-8 w-48 bg-zinc-800 rounded-lg"></div>
        </div>
  
       
      </div>
    )
  } 