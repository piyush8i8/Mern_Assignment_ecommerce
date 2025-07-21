// src/pages/Cart.jsx
export default function Cart() {
  const items = [{id:1,name:"Product 1",qty:2,price:99}];
  const subtotal = items.reduce((sum,i)=>sum+i.qty*i.price,0);
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Cart</h2>
      {items.map(it=>(
        <div key={it.id} className="flex justify-between py-4 border-b">
          <span>{it.name}</span>
          <span>Qty: {it.qty}</span>
          <span>${it.qty * it.price}</span>
        </div>
      ))}
      <p className="mt-4 font-bold">Subtotal: ${subtotal}</p>
      <button className="mt-6 w-full bg-green-600 text-white py-2 rounded">Checkout</button>
    </div>
  );
}
