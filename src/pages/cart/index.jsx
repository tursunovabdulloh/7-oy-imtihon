import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
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
              brand,
            }) => {
              return (
                <>
                  <div className="flex">
                    <div className="flex">
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
                        <p>{title}</p>
                        <p>{brand}</p>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </>
              );
            }
          )}
      </div>
    </div>
  );
}

export default Cart;
