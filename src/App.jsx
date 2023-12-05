import Avatar from './assets/hazar.jpg';

const App = () => {
  return (
    <>
      <aside className="hidden h-screen fixed lg:flex flex-col justify-between p-4 z-10">
        <div className="w-56 leading-7 text-base bg-white">
          <div className="pb-4">
            <div className="flex justify-between gap-2 mb-4">
              <div className="flex items-center">
                <div>
                  <img className="rounded-full" src={Avatar} width={50} height={50} alt="" />
                </div>
                <div className="ml-2 leading-5">
                  <a href="#"><h5 className="font-bold">Hazar</h5></a>
                  <small className="text-gray-500">Free Plan</small>
                </div>
              </div>
              <div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>
                </button>
              </div>
            </div>
            <div>
              <button className="w-full py-1 rounded-3xl border border-blue-600 text-blue-600 bg-white font-bold hover:bg-blue-600 hover:text-white">Go Premium</button>
            </div>
          </div>
          <div className="py-4">
            <ul>
              <li className="my-2 font-semibold text-blue-600">
                <a href="#" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path></svg>
                  My day 
                  <div className="flex items-center justify-center p-3 rounded-full bg-blue-600 text-sm text-white">
                    <span className="absolute">4</span>
                  </div>
                </a>
              </li>
              <li className="my-2 font-semibold">
                <a href="#" className="flex items-center gap-2 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
                  Next 7 days 
                  <div className="flex items-center justify-center p-3 rounded-full bg-gray-200 text-sm text-gray-400">
                    <span className="absolute">4</span>
                  </div>
                </a>
              </li>
              <li className="my-2 font-semibold">
                <a href="#" className="flex items-center gap-2 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path></svg>
                  All my tasks 
                  <div className="flex items-center justify-center p-3 rounded-full bg-gray-200 text-sm text-gray-400">
                    <span className="absolute">4</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-1 text-lg font-bold">
                My Lists<svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
              </h4>
              <button className="hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="my-2 font-semibold"><a href="#" className="flex items-center gap-2 hover:text-blue-600">Grocery List</a></li>
                <li className="my-2 font-semibold"><a href="#" className="flex items-center gap-2 hover:text-blue-600">Work</a></li>
                <li className="my-2 font-semibold"><a href="#" className="flex items-center gap-2 hover:text-blue-600">Shopping</a></li>
                <li className="my-2 font-semibold">
                  <a href="#" className="flex items-center gap-2 hover:text-blue-600">
                    Personal
                    <div className="flex items-center justify-center p-3 rounded-full bg-gray-200 text-sm text-gray-400">
                      <span className="absolute">4</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-1 text-lg font-bold">
                Tags
              </h4>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="my-2 font-semibold"><a href="#" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-600">#Priority</a></li>
                <li className="my-2 font-semibold"><a href="#" className="flex items-center gap-2 text-red-400 hover:text-red-600">#Urgent</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full py-2 rounded-3xl border bg-blue-600 text-white font-bold hover:bg-blue-500 hover:text-white">Create Workspace</button>
        </div>
      </aside>
    
      <div className="lg:hidden fixed w-full bg-white">
        <div className="flex justify-between m-5 gap-2">
          <div className="flex items-center">
            <div>
              <img className="rounded-full" src={Avatar} width={50} height={50} alt="" />
            </div>
            <div className="ml-2 leading-5">
              <a href="#"><h5 className="font-bold">Hazar</h5></a>
              <small className="text-gray-500">Free Plan</small>
            </div>
          </div>
          <div>
            <button >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <main className="container mx-auto">
        <div className="flex flex-col mt-20 lg:mt-0 lg:flex-row lg:ml-64">
          <section id="todo-list" className="lg:w-3/5 2xl:w-3/5 m-4">
            <div>
              <div className="my-3">
                <h1 className="text-3xl font-bold">Good Afternoon, Hazar.</h1>
                <h2 className="text-3xl font-bold text-gray-300">Be so good no one can ignore you</h2>
              </div>
              <div className="flex flex-row gap-5 my-10">
                <div className="text-center">
                  <span className="block font-bold text-gray-500">WED</span>
                  <strong className="block text-5xl font-bold">16</strong>
                  <span className="block text-base text-gray-400">November</span>
                </div>
                <div className="my-2 font-semibold">
                  <p>All day</p>
                  <p>6.00 - 6.45PM</p>
                </div>
                <div className="my-2 font-semibold">
                  <div className="flex gap-3">
                    <svg className="text-orange-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M156,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L113.22,54A55.9,55.9,0,0,0,88,48c-.58,0-1.16,0-1.74,0L83.37,31.71a8,8,0,1,0-15.75,2.77L70.5,50.82A56.1,56.1,0,0,0,47.23,65.67L33.61,56.14a8,8,0,1,0-9.17,13.11L38,78.77A55.55,55.55,0,0,0,32,104c0,.57,0,1.15,0,1.72L15.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,76,224h80a76,76,0,0,0,0-152ZM48,104a40,40,0,0,1,72.54-23.24,76.26,76.26,0,0,0-35.62,40,52.14,52.14,0,0,0-31,4.17A40,40,0,0,1,48,104ZM156,208H76a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,156,208Z"></path></svg>
                    <span>35/50</span>
                  </div>
                  <p>report due</p>
                </div>
              </div>
            </div>
            <div className="my-10 text-gray-500 leading-7">
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 flex items-center justify-center bg-gray-500 rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path></svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Read the report</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Write the report</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4 p-2 border border-gray-100 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full">
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></svg>
                      <small>My lists &gt; Personal</small>
                    </div>
                    <h5 className="text-black font-semibold">Figure out what a report is</h5>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"></path></svg>
                  </button>
                  <button className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="fixed w-full left-0 lg:left-auto lg:w-2/5 pt-10 pb-4 bottom-0 bg-gradient-to-t from-white">
                <div className="w-full flex justify-center">
                  <button className="flex items-center py-2 px-5 rounded-3xl bg-gray-300 hover:bg-gray-200 font-bold text-gray-700">
                    <svg className="text-gray-700 mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                    Add task
                  </button>
                </div>
            </div>
          </section>
          <section id="events" className="lg:w-2/5 2xl:w-1/5 m-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
                <span className="font-semibold">Events</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
              </div>
              <div className="flex gap-2 items-center">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M197.67,186.37a8,8,0,0,1,0,11.29C196.58,198.73,170.82,224,128,224c-37.39,0-64.53-22.4-80-39.85V208a8,8,0,0,1-16,0V160a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H55.44C67.76,183.35,93,208,128,208c36,0,58.14-21.46,58.36-21.68A8,8,0,0,1,197.67,186.37ZM216,40a8,8,0,0,0-8,8V71.85C192.53,54.4,165.39,32,128,32,85.18,32,59.42,57.27,58.34,58.34a8,8,0,0,0,11.3,11.34C69.86,69.46,92,48,128,48c35,0,60.24,24.65,72.56,40H168a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Z"></path></svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z"></path></svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                </button>
              </div>
            </div>
            <div className="text-sm">
              <span className="block my-1 uppercase">All Day</span>
              <div className="flex gap-2 ml-9 mb-1 p-1 bg-red-400 text-white">
                <span className="text-yellow-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M156,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L113.22,54A55.9,55.9,0,0,0,88,48c-.59,0-1.16,0-1.74,0L83.37,31.71a8,8,0,1,0-15.75,2.77L70.5,50.82A56.1,56.1,0,0,0,47.23,65.67L33.61,56.14a8,8,0,1,0-9.17,13.11L38,78.77A55.55,55.55,0,0,0,32,104c0,.57,0,1.15,0,1.72L15.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,76,224h80a76,76,0,0,0,0-152ZM84.92,120.76a52.14,52.14,0,0,0-31,4.17,40,40,0,0,1,66.62-44.17A76.26,76.26,0,0,0,84.92,120.76Z"></path></svg>
                </span>
                <small>35/50</small>
              </div>
              <div>
                <div className="flex">
                  <div className="w-11 my-3">1PM</div>
                  <div className="w-full">
                    <div className="px-2 bg-blue-300 text-white">12:00PM-1.15PM</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">2PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">3PM</div>
                  <div className="w-full pt-5">
                    <div className="px-2 mb-1 bg-blue-300 text-white">
                      <small>report due</small>
                      <p>3:30PM - 4.00PM</p>
                    </div>
                    <div className="px-2 -mb-6 bg-blue-300 text-white">
                      <small>report due</small>
                      <p>3:00PM - 3.30PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">4PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">5PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">6PM</div>
                  <div className="w-full">
                    <div className="mt-5 px-2 bg-blue-500 text-white">
                      <small>report due</small>
                      <p>6:00PM - 6.45PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">7PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">8PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">9PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">10PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">11PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-11 my-3">12PM</div>
                  <div className="w-full">
                    <div className="mt-6"><hr /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App