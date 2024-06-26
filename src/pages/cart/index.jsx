// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetProductsQuery } from "../products/productsApi";

// function Cart() {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.products);
//   const { data } = useGetProductsQuery();
//   let subtotal = 0;
//   cart.forEach((item) => {
//     console.log(item.price);
//     subtotal += item.price * item.count;
//   });
//   const shipping = 5;
//   const tax = 115;
//   const orderTotal = subtotal + shipping + tax;
//   console.log(subtotal);
//   return (
//     <div className="container">
//       {" "}
//       <div className="mt-20 px-4 mb-[30px]">
//         <div className="flex justify-between mb-[20px]">
//           <div>
//             <p className="font-[Segoe UI] font-normal text-[30px] text-[#394E6A]">
//               Shopping Cart
//             </p>
//           </div>
//         </div>
//         <hr className="h-[1.5px] bg-[#E2E8F4] border-none" />
//       </div>
//       <div className="flex gap-[250px]">
//         {" "}
//         <div>
//           {cart &&
//             cart.map(
//               ({
//                 id,
//                 title,
//                 description,
//                 images,
//                 price,
//                 rating,
//                 stock,
//                 category,
//                 brand,
//               }) => {
//                 return (
//                   <>
//                     <div className="">
//                       <div className="px-8 max-w-[800px]">
//                         <hr className="h-[1.5px] bg-[#E2E8F4] border-none w-[750px] my-4" />
//                         <div className="flex justify-between items-star py-4">
//                           <div className="flex max-w-[280px] items-star gap-4">
//                             <div className="border-2 rounded-lg">
//                               <img
//                                 src={images[0]}
//                                 alt=""
//                                 className="rounded-lg"
//                               />
//                             </div>
//                             <div className="flex flex-col">
//                               <p className="text-lg font-semibold w-[150px]">
//                                 {title}
//                               </p>
//                               <p className="text-gray-500">brand</p>
//                               <div className="flex items-center mt-2">
//                                 <span>Color:</span>
//                                 <div className="ml-2 bg-orange-600 w-[16px] h-[16px] rounded-full"></div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex flex-col items-center gap-4 max-w-[240px]">
//                             <p>Amount</p>
//                             <input
//                               type="number"
//                               min="1"
//                               defaultValue="1"
//                               className="w-16 text-center border border-gray-300 rounded-md"
//                             />
//                             <button className="btn btn-ghost text-blue-500 mt-2">
//                               remove
//                             </button>
//                           </div>
//                           <div className="text-lg font-semibold">${price}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 );
//               }
//             )}
//         </div>
//         <div className="card flex flex-col mt-[32px] w-[325px] h-[400px] bg-blue-100">
//           <div>
//             <div className="flex flex-col  mt-8 px-8">
//               <div className="flex justify-between mb-2">
//                 <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
//                   Subtotal
//                 </p>
//                 <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
//                   price
//                 </p>
//               </div>
//               <hr className="border-t-2 border-black" />
//             </div>
//             <div className="flex flex-col  mt-8 px-8">
//               <div className="flex justify-between mb-2">
//                 <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
//                   Subtotal
//                 </p>
//                 <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
//                   price
//                 </p>
//               </div>
//               <hr className="border-t-2 border-black" />
//             </div>
//             <div className="flex flex-col  mt-8 px-8">
//               <div className="flex justify-between mb-2">
//                 <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
//                   Subtotal
//                 </p>
//                 <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
//                   price
//                 </p>
//               </div>
//               <hr className="border-t-2 border-black" />
//             </div>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  addProduct,
} from "../../store/CartSlice";
import { useGetProductsQuery } from "../products/productsApi";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const { data } = useGetProductsQuery();

  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });
  const shipping = 5;
  const tax = 115;
  const orderTotal = subtotal + shipping + tax;

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="container">
      <div className="mt-20 px-4 mb-[30px]">
        <div className="flex justify-between mb-[20px]">
          <div>
            <p className="font-[Segoe UI] font-normal text-[30px] text-[#394E6A]">
              Shopping Cart
            </p>
          </div>
        </div>
        <hr className="h-[1.5px] bg-[#E2E8F4] border-none" />
      </div>
      <div className="flex gap-[250px]">
        <div>
          {cart &&
            cart.map(({ id, title, images, price, quantity }) => {
              return (
                <div key={id} className="px-8 max-w-[800px]">
                  <hr className="h-[1.5px] bg-[#E2E8F4] border-none w-[750px] my-4" />
                  <div className="flex justify-between items-start py-4">
                    <div className="flex max-w-[280px] items-start gap-4">
                      <div className="border-2 rounded-lg">
                        <img
                          src={images[0]}
                          alt={title}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg font-semibold w-[150px]">
                          {title}
                        </p>
                        <p className="text-gray-500">brand</p>
                        <div className="flex items-center mt-2">
                          <span>Color:</span>
                          <div className="ml-2 bg-orange-600 w-[16px] h-[16px] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 max-w-[240px]">
                      <p>Quantity</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => dispatch(decrementQuantity(id))}
                          className="btn btn-secondary w-[35px] p-[7.5px] min-h-0"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          readOnly
                          className="w-16 text-center border border-gray-300 rounded-md"
                        />
                        <button
                          onClick={() => dispatch(incrementQuantity(id))}
                          className="btn btn-secondary w-[35px] p-[7.5px] min-h-0"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeProduct(id))}
                        className="btn btn-ghost text-blue-500 mt-2"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="text-lg font-semibold">${price}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="card flex flex-col mt-[32px] w-[325px] h-[400px] bg-blue-100">
          <div>
            <div className="flex flex-col mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Subtotal
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
            <div className="flex flex-col mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Shipping
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  ${shipping.toFixed(2)}
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
            <div className="flex flex-col mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Tax
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  ${tax.toFixed(2)}
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
            <div className="flex flex-col mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Order Total
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  ${orderTotal.toFixed(2)}
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-primary btn-[#fff] w-[200px]">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
