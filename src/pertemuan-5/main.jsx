import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/tailwind.css'

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-5">
      <h1 className="text-3xl font-bold">Sedap<span className="text-[#00B074]">.</span></h1>
      <p className="text-xs text-gray-400 mt-1">Modern Admin Dashboard</p>
      
      <div className="mt-8 space-y-2">
        <div className="bg-[#00B074] text-white p-3 rounded-lg">Dashboard</div>
        <div className="text-gray-600 p-3 rounded-lg hover:bg-gray-100">Order List</div>
        <div className="text-gray-600 p-3 rounded-lg hover:bg-gray-100">Customer</div>
      </div>
      
      <div className="absolute bottom-5 left-5 right-5">
        <div className="bg-[#00B074] text-white p-2 rounded-lg text-center text-sm">+ Add Menus</div>
        <p className="text-xs text-center text-gray-400 mt-3">© 2025 Sedap Admin</p>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center ml-64">
      <input type="text" placeholder="Search here..." className="border rounded-lg p-2 w-96 outline-none focus:border-[#00B074]" />
      <div className="flex items-center gap-4">
        <span>🔔</span>
        <div className="flex items-center gap-2 border-l pl-4">
          <span>Hello, <b>Samantha</b></span>
          <img src="https://avatar.iran.liara.run/public/28" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="p-6 ml-64 mt-16">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 text-sm">Hi, Samantha. Welcome back!</p>
      
      <div className="grid grid-cols-4 gap-5 mt-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-2xl mb-2">🛒</div>
          <div className="text-gray-500 text-sm">Total Orders</div>
          <div className="text-2xl font-bold">75</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-2xl mb-2">🚚</div>
          <div className="text-gray-500 text-sm">Total Delivered</div>
          <div className="text-2xl font-bold">357</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-2xl mb-2">🚫</div>
          <div className="text-gray-500 text-sm">Total Canceled</div>
          <div className="text-2xl font-bold">65</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-2xl mb-2">💰</div>
          <div className="text-gray-500 text-sm">Total Revenue</div>
          <div className="text-2xl font-bold">$128</div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)