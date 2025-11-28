// // src/pages/AdminDashboard.tsx
// import { useState, useEffect } from 'react'
// import { supabase } from '../lib/supabaseClient'   // YE DAAL DO

// export default function AdminDashboard() {
//   const [products, setProducts] = useState<any[]>([])
//   const [title, setTitle] = useState('')
//   const [price, setPrice] = useState('')
//   const [image, setImage] = useState<File | null>(null)

//   useEffect(() => { loadProducts() }, [])

//   const loadProducts = async () => {
//     const { data } = await supabase.from('flower_products').select('*')
//     setProducts(data || [])
//   }

//   const addProduct = async () => {
//     if (!title || !price || !image) return alert('Sab bharo')
    
//     const fileName = Date.now() + '_' + image.name
//     await supabase.storage.from('flower-images').upload(fileName, image)
//     const imageUrl = `https://wudgadvdkthizwnkslye.supabase.co/storage/v1/object/public/flower-images/${fileName}`

//     await supabase.from('flower_products').insert({ title, price: Number(price), image_url: imageUrl })
//     alert('Product add ho gaya!')
//     setTitle(''); setPrice(''); setImage(null)
//     loadProducts()
//   }

//   const deleteProduct = async (id: string) => {
//     if (confirm('Delete karna hai?')) {
//       await supabase.from('flower_products').delete().eq('id', id)
//       loadProducts()
//     }
//   }

//   return (
//     <div className="p-8 min-h-screen bg-gray-50">
//       <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      
//       <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-2xl">
//         <input className="border p-3 w-full mb-3 rounded" placeholder="Product Title" value={title} onChange={e=>setTitle(e.target.value)} />
//         <input className="border p-3 w-full mb-3 rounded" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
//         <input type="file" className="border p-3 w-full mb-3 rounded" onChange={e=>setImage(e.target.files?.[0] || null)} />
//         <button onClick={addProduct} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold">Add Product</button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map(p => (
//           <div key={p.id} className="bg-white rounded-xl shadow overflow-hidden">
//             <img src={p.image_url} className="w-full h-64 object-cover" />
//             <div className="p-4">
//               <h3 className="font-bold text-xl">{p.title}</h3>
//               <p className="text-2xl text-green-600">₹{p.price}</p>
//               <button onClick={()=>deleteProduct(p.id)} className="mt-3 bg-red-600 text-white px-4 py-2 rounded">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }





// add product with realtime updates
// src/pages/AdminDashboard.tsx
// import { useState, useEffect } from 'react'
// import { supabase } from '../lib/supabaseClient'

// export default function AdminDashboard() {
//   const [products, setProducts] = useState<any[]>([])
//   const [title, setTitle] = useState('')
//   const [price, setPrice] = useState('')
//   const [image, setImage] = useState<File | null>(null)

//   // Pehli baar load + Realtime subscription (Yeh naya add kiya hai!)
//   useEffect(() => {
//     loadProducts()

//     const channel = supabase
//       .channel('flower_products_changes')
//       .on(
//         'postgres_changes',
//         {
//           event: '*', // INSERT, UPDATE, DELETE sab listen karega
//           schema: 'public',
//           table: 'flower_products',
//         },
//         () => {
//           loadProducts() // Koi bhi change ho → list refresh ho jayegi
//         }
//       )
//       .subscribe()

//     // Cleanup (important!)
//     return () => {
//       supabase.removeChannel(channel)
//     }
//   }, [])

//   const loadProducts = async () => {
//     const { data } = await supabase
//       .from('flower_products')
//       .select('*')
//       .order('created_at', { ascending: false }) // naye products upar
//     setProducts(data || [])
//   }

//   const addProduct = async () => {
//     if (!title || !price || !image) return alert('Title, price aur image bharo!')

//     const fileName = `${Date.now()}_${image.name}`
//     const { error: uploadError } = await supabase.storage
//       .from('flower-images')
//       .upload(fileName, image)

//     if (uploadError) {
//       alert('Image upload fail: ' + uploadError.message)
//       return
//     }

//     const imageUrl = `https://wudgadvdkthizwnkslye.supabase.co/storage/v1/object/public/flower-images/${fileName}`

//     const { error } = await supabase
//       .from('flower_products')
//       .insert({ title, price: Number(price), image_url: imageUrl })

//     if (error) {
//       alert('Product add nahi hua: ' + error.message)
//     } else {
//       alert('Product add ho gaya!')
//       setTitle('')
//       setPrice('')
//       setImage(null)
//       // loadProducts() realtime se khud ho jayega
//     }
//   }

//   const deleteProduct = async (id: string) => {
//     if (!confirm('Pakka delete karna hai?')) return

//     const { error } = await supabase.from('flower_products').delete().eq('id', id)

//     if (error) {
//       alert('Delete nahi hua: ' + error.message)
//     } else {
//       alert('Product delete ho gaya!')
//       // loadProducts() realtime se khud ho jayega
//     }
//   }

//   return (
//     <div className="p-8 min-h-screen bg-gray-50">
//       <h1 className="text-4xl font-bold mb-8 text-purple-700">Admin Panel</h1>

//       {/* Add Product Form */}
//       <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 max-w-2xl">
//         <h2 className="text-2xl font-bold mb-6">Naya Product Add Karo</h2>
//         <input
//           className="border p-4 w-full mb-4 rounded-lg text-lg"
//           placeholder="Product Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           className="border p-4 w-full mb-4 rounded-lg text-lg"
//           placeholder="Price (₹)"
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           className="border p-4 w-full mb-6 rounded-lg"
//           onChange={(e) => setImage(e.target.files?.[0] || null)}
//         />
//         <button
//           onClick={addProduct}
//           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-xl hover:scale-105 transition"
//         >
//           Add Product
//         </button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {products.length === 0 ? (
//           <p className="text-xl text-gray-500 col-span-full text-center">Koi product nahi hai abhi tak!</p>
//         ) : (
//           products.map((p) => (
//             <div key={p.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition">
//               <img src={p.image_url} alt={p.title} className="w-full h-64 object-cover" />
//               <div className="p-5">
//                 <h3 className="font-bold text-xl text-gray-800">{p.title}</h3>
//                 <p className="text-3xl font-bold text-green-600 my-2">₹{p.price}</p>
//                 <button
//                   onClick={() => deleteProduct(p.id)}
//                   className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }







// delete product button
// src/pages/AdminDashboard.tsx
// import { useState, useEffect } from 'react'
// import { supabase } from '../lib/supabaseClient'
// import { Trash2, Plus, Image as ImageIcon } from 'lucide-react'

// export default function AdminDashboard() {
//   const [products, setProducts] = useState<any[]>([])
//   const [title, setTitle] = useState('')
//   const [price, setPrice] = useState('')
//   const [image, setImage] = useState<File | null>(null)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     loadProducts()

//     const channel = supabase
//       .channel('flower_products')
//       .on('postgres_changes', { event: '*', schema: 'public', table: 'flower_products' }, () => {
//         loadProducts()
//       })
//       .subscribe()

//     return () => { supabase.removeChannel(channel) }
//   }, [])

//   const loadProducts = async () => {
//     const { data } = await supabase
//       .from('flower_products')
//       .select('*')
//       .order('created_at', { ascending: false })
//     setProducts(data || [])
//   }

//   const addProduct = async () => {
//     if (!title || !price || !image) return alert('Sab fields bharo bhai!')
//     setLoading(true)

//     const fileName = `${Date.now()}_${image.name}`
//     const { error: uploadError } = await supabase.storage
//       .from('flower-images')
//       .upload(fileName, image)

//     if (uploadError) {
//       alert('Image upload fail: ' + uploadError.message)
//       setLoading(false)
//       return
//     }

//     const imageUrl = `https://wudgadvdkthizwnkslye.supabase.co/storage/v1/object/public/flower-images/${fileName}`

//     await supabase
//       .from('flower_products')
//       .insert({ title, price: Number(price), image_url: imageUrl })

//     alert('Product add ho gaya!')
//     setTitle('')
//     setPrice('')
//     setImage(null)
//     setLoading(false)
//   }

//   // ← DELETE FUNCTION WITH CONFIRM
//   const deleteProduct = async (id: string, title: string) => {
//     if (!confirm(`"${title}" ko delete karna hai? Pakka?`)) return

//     const { error } = await supabase
//       .from('flower_products')
//       .delete()
//       .eq('id', id)

//     if (error) {
//       alert('Delete nahi hua: ' + error.message)
//     } else {
//       alert('Product delete ho gaya!')
//       // Realtime se khud update ho jayega
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//           Admin Dashboard
//         </h1>

//         {/* Add Product Form */}
//         <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
//             <Plus className="text-green-600" /> Naya Product Add Karo
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <input
//               className="border-2 border-gray-300 rounded-xl px-5 py-4 text-lg focus:border-purple-500 focus:outline-none"
//               placeholder="Product Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//               className="border-2 border-gray-300 rounded-xl px-5 py-4 text-lg focus:border-purple-500 focus:outline-none"
//               placeholder="Price (₹)"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               className="border-2 border-dashed border-gray-300 rounded-xl px-5 py-4 text-lg"
//               onChange={(e) => setImage(e.target.files?.[0] || null)}
//             />
//           </div>
//           <button
//             onClick={addProduct}
//             disabled={loading}
//             className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition disabled:opacity-70"
//           >
//             {loading ? 'Adding...' : 'Add Product'}
//           </button>
//         </div>

//         {/* Products List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.length === 0 ? (
//             <p className="col-span-full text-center text-2xl text-gray-500">Koi product nahi hai abhi...</p>
//           ) : (
//             products.map((p) => (
//               <div key={p.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">
//                 <img src={p.image_url} alt={p.title} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold">{p.title}</h3>
//                   <p className="text-3xl font-bold text-green-600 mt-2">₹{p.price}</p>
//                   <button
//                     onClick={() => deleteProduct(p.id, p.title)}
//                     className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition"
//                   >
//                     <Trash2 size={20} />
//                     Delete Product
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }


















import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Trash2, Plus, ArrowLeft, ShoppingBag, ImageIcon } from 'lucide-react'

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadProducts()

    const channel = supabase
      .channel('flower_products')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'flower_products' }, () => {
        loadProducts()
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  const loadProducts = async () => {
    const { data } = await supabase
      .from('flower_products')
      .select('*')
      .order('created_at', { ascending: false })
    setProducts(data || [])
  }

  const addProduct = async () => {
    if (!title || !price || !image) return alert('Sab fields bharo bhai!')
    setLoading(true)

    const fileName = `${Date.now()}_${image.name}`
    const { error: uploadError } = await supabase.storage
      .from('flower-images')
      .upload(fileName, image)

    if (uploadError) {
      alert('Image upload fail: ' + uploadError.message)
      setLoading(false)
      return
    }

    const imageUrl = `https://wudgadvdkthizwnkslye.supabase.co/storage/v1/object/public/flower-images/${fileName}`

    await supabase
      .from('flower_products')
      .insert({ title, price: Number(price), image_url: imageUrl })

    alert('Product add ho gaya!')
    setTitle('')
    setPrice('')
    setImage(null)
    setLoading(false)
  }

  const deleteProduct = async (id: string, title: string) => {
    if (!confirm(`"${title}" ko delete karna hai? Pakka?`)) return

    const { error } = await supabase
      .from('flower_products')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Delete nahi hua: ' + error.message)
    } else {
      alert('Product delete ho gaya!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 relative">

      {/* BACK TO SHOP BUTTON – SABSE PREMIUM */}
      {/* BACK TO SHOP BUTTON – SABSE PREMIUM */}
      <div className="fixed top-6 left-6 z-50">
        <a href="/">
          <button className="flex items-center gap-3 bg-white/90 backdrop-blur-md hover:bg-white shadow-2xl px-6 py-4 rounded-2xl font-bold text-purple-700 hover:text-purple-800 border-2 border-purple-200 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-purple-300/50">
            <ArrowLeft className="h-6 w-6" />
            Back to Home
            <ShoppingBag className="h-6 w-6" />
          </button>
        </a>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>

        {/* Add Product Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-purple-700">
            <Plus className="h-10 w-10 text-green-600 bg-green-100 p-2 rounded-full" />
            Naya Product Add Karo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <input
              className="border-2 border-purple-200 rounded-2xl px-6 py-5 text-lg focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="border-2 border-purple-200 rounded-2xl px-6 py-5 text-lg focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition"
              placeholder="Price (PKR)"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="border-2 border-dashed border-purple-300 rounded-2xl px-6 py-5 text-lg cursor-pointer hover:border-purple-500 transition bg-purple-50/50">
              <div className="flex items-center justify-center gap-3">
                <ImageIcon className="h-8 w-8 text-purple-600" />
                <span>{image ? image.name : "Choose Image"}</span>
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </label>
          </div>
          <button
            onClick={addProduct}
            disabled={loading}
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-16 py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Adding to Shop...' : 'Add Product'}
          </button>
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <p className="col-span-full text-center text-3xl text-gray-400 py-20 font-medium">
              Koi product nahi hai abhi... Pehla product add karo!
            </p>
          ) : (
            products.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-purple-100">
                <img src={p.image_url} alt={p.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{p.title}</h3>
                  <p className="text-3xl font-bold text-green-600 mt-600 mt-3">Rs. {p.price.toLocaleString()}</p>
                  <button
                    onClick={() => deleteProduct(p.id, p.title)}
                    className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition hover:scale-105"
                  >
                    <Trash2 className="h-6 w-6" />
                    Delete Product
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}