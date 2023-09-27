export default function Main() {
    return (
      <div className="p-6 bg-white relative">
        <h1 className="text-3xl font-semibold py-2 z-10">Fun Facts about React:</h1>
        <ul>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
            <li className="">Was First released in 2013</li>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
            <li>Was originally created by Jordan Walke</li>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
            <li>Is maintained by facebook</li>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-2 w-2 bg-blue-500 rounded-lg"></div>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </div>
        </ul>
        <img src="/reacthalf.png" className="absolute top-2 right-0 z-0 opacity-40"/>
      </div>
    );
  }