import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../products/productsApi";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const { data } = useGetProductsQuery();
  return (
    <div className="container">
      {" "}
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
        {" "}
        <div>
          {cart &&
            cart.map(
              ({
                id,
                title,
                description,
                images,
                price,
                rating,
                stock,
                category,
                brand,
              }) => {
                return (
                  <>
                    <div className="">
                      <div className="px-8 max-w-[715px]">
                        <hr className="h-[1.5px] bg-[#E2E8F4] border-none w-[750px] my-4" />
                        <div className="flex justify-between w-[715px] items-star py-4">
                          <div className="flex max-w-[715px] items-star gap-4">
                            <div>
                              <img
                                src={images[0]}
                                alt=""
                                width={128}
                                height={128}
                                className="rounded-lg"
                              />
                            </div>
                            <div className="flex flex-col">
                              <p className="text-lg font-semibold">{title}</p>
                              <p className="text-gray-500">brand</p>
                              <div className="flex items-center mt-2">
                                <span>Color:</span>
                                <div className="ml-2 bg-orange-600 w-[16px] h-[16px] rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-4">
                            <p>Amount</p>
                            <input
                              type="number"
                              min="1"
                              defaultValue="1"
                              className="w-16 text-center border border-gray-300 rounded-md"
                            />
                            <button className="btn btn-ghost text-blue-500 mt-2">
                              remove
                            </button>
                          </div>
                          <div className="text-lg font-semibold">${price}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            )}
        </div>
        <div className="card flex flex-col mt-[32px] w-[325px] h-[400px] bg-blue-100">
          <div>
            <div className="flex flex-col  mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Subtotal
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  price
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
            <div className="flex flex-col  mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Subtotal
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  price
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
            <div className="flex flex-col  mt-8 px-8">
              <div className="flex justify-between mb-2">
                <p className="text-[18px] font-[Segoe UI] text-[#394E6A]">
                  Subtotal
                </p>
                <p className="text-[14px] font-[Segoe UI] text-[#394E6A]">
                  price
                </p>
              </div>
              <hr className="border-t-2 border-black" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
