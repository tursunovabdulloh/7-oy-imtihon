import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import rasm1 from "../../assets/rasm1.webp";
import rasm2 from "../../assets/rasm2.webp";
import rasm3 from "../../assets/rasm3.webp";
import rasm4 from "../../assets/rasm4.webp";

function Home() {
  const dispatch = useDispatch();
  const {
    items: data,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 18, skip: 0 }));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container flex justify-center mt-36">
        <span
          className="loading loading-bars loading-lg text-4xl transform"
          style={{ zoom: 2.5 }}
        ></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between mt-14 mb-[90px] xs:flex">
          <div className="flex flex-col">
            <h2 className="max-w-[456px] font-[Segoe UI] font-bold text-[47px] mb-8 text-[#394E6A] leading-[58px]">
              We are changing the way people shop
            </h2>
            <p className="max-w-[456px] font-[Segoe UI] font-normal text-[15px] mb-10 px-1 text-[#394E6A]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <button className="max-w-[147.11px] btn btn-info text-[#DBE1FF] bg-[#057AFF] rounded-lg font-[Segoe UI] font-normal text-[13px]">
              <Link to="/products">OUR PRODUCTS</Link>
            </button>
          </div>
          <div className="">
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              <div className="carousel-item">
                <img
                  src={rasm1}
                  className="rounded-box w-[320px] h-[416px] object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={rasm2}
                  className="rounded-box w-[320px] h-[416px] object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={rasm3}
                  className="rounded-box w-[320px] h-[416px] object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={rasm4}
                  className="rounded-box w-[320px] h-[416px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col mb-[48px]">
            <p className="font-[Segoe UI] font-normal text-[30px] mb-[21px] text-[#394E6A]">
              Featured products
            </p>
            <hr className="border-t-2 border-[#E2E8F4]" />
          </div>
          <div>
            {" "}
            <main className="container mt-5 mb-5">
              <section>
                <div className="grid gap-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-24 xl:gap-x-48 mt-10 pb-20 strech">
                  {data &&
                    data.map(
                      ({
                        id,
                        title,
                        description,
                        images,
                        price,
                        rating,
                        stock,
                      }) => {
                        return (
                          <div
                            key={id}
                            className="product flex justify-self-center items-stretch"
                          >
                            <div
                              className="card w-[352px] bg-base-100 shadow-[0px_20px_25px_-5px] 
                    shadow-[#0000001A]"
                            >
                              <figure>
                                <img
                                  className="w-[320px] h-[320px] object-center object-scale-down"
                                  src={images ? images[0] : ""}
                                  height={320}
                                  width={320}
                                  alt={title}
                                />
                              </figure>
                              <div className="">
                                <h2 className="text-center font-[Segoe UI] font-semibold text-[16px] px-1 text-[#394E6A]">
                                  {title}
                                </h2>
                                <div className="card-actions flex justify-center mt-5 gap-2">
                                  <div className="btn btn-sm p-[7.5px] mb-8 font-[Segoe UI] font-normal text-[20px] px-1 text-[#463AA1]">
                                    $ {price}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
