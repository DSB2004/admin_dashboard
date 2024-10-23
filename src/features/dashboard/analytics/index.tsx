
import Graphs from "./graphs";
import Create from "./create";
export default function Analytics() {
  // console.log(Graphs())



  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-lg md:text-xl">Analytics</h1>
        </div>

        <div className="flex items-center gap-2 ">
          <Create></Create>
        </div>
      </div >
      {/* header */}

      {/* graphs */}
      <Graphs />
      {/* graphs */}
    </>)
}
