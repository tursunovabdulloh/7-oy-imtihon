import React, { useState, useEffect } from "react";
import rasm_1 from "../../assets/Button.svg";
import rasm_2 from "../../assets/Button1.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getData,
  searchItem,
  setSortOrder,
} from "../../store/CartSlice";
import { useGetProductsQuery } from "./productsApi";

function Products() {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.cart);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 18;
  const { data, error, isLoading, isSuccess } = useGetProductsQuery({
    limit: productsPerPage,
    skip: (currentPage - 1) * productsPerPage,
  });
  const [filter, setFilter] = useState("a-z");
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(searchItem(searchValue));
  }, [searchValue]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getData(data.products));
    }
  }, [isSuccess, data, dispatch]);

  const handleSearchClick = () => {
    setSearchClicked(true);
    dispatch(setSortOrder(filter));
  };

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.total / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
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
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="bg-blue-100 px-8 mt-20 rounded-[6px]">
          <form className="flex flex-col mb-8 pt-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="font-[Segoe UI] font-normal text-[14px] pl-1 mb-2 text-[#394E6A]">
                  Search product
                </p>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div>
                <p className="font-[Segoe UI] font-normal text-[14px] pl-1 mb-2 text-[#394E6A]">
                  Select category
                </p>
                <select className="select select-bordered w-[245px]">
                  <option defaultValue="all">all</option>
                  <option>Tables</option>
                  <option>Chairs</option>
                  <option>Kids</option>
                  <option>Sofas</option>
                  <option>Beds</option>
                </select>
              </div>
              <div>
                <p className="font-[Segoe UI] font-normal text-[14px] pl-1 mb-2 text-[#394E6A]">
                  Sort By
                </p>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="select select-bordered w-[245px]"
                >
                  <option value="a-z">a-z</option>
                  <option value="z-a">z-a</option>
                  <option value="low">low</option>
                  <option value="high">high</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input
                  type="range"
                  min={0}
                  className="range range-info w-[245px]"
                />
              </div>
              <div className="flex gap-[215px]">
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className="w-[245px] h-8 btn btn-info text-[#DBE1FF] min-h-0 bg-[#057AFF] rounded-lg font-[Segoe UI] font-normal text-[13px]"
                >
                  SEARCH
                </button>
                <button
                  type="submit"
                  className="w-[245px] h-8 btn btn-active btn-secondary min-h-0 text-[#DBE1FF] bg-[#C149AD] rounded-lg font-[Segoe UI] font-normal text-[13px]"
                >
                  RESET
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="">
          <div className="flex justify-between mb-[15px]">
            <div>
              <p className="font-[Segoe UI] font-normal text-[15px] text-[#394E6A]">
                {filteredData.length} products
              </p>
            </div>
            <div className="flex gap-4">
              <img src={rasm_1} alt="" />
              <img src={rasm_2} alt="" />
            </div>
          </div>
          <hr className="h-[1.5px] bg-[#E2E8F4] border-none" />
        </div>
        <main className="mt-5">
          <section>
            <div className="container grid gap-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-24 xl:gap-x-48 mt-10 pb-20 stretch">
              {!!filteredData?.length &&
                filteredData.map(
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
                            <div className="card-actions flex flex-col items-center justify-center mt-5 gap-1">
                              <div className="btn w-[111px]  p-[7.5px] mb-2 font-[Segoe UI] font-normal text-[20px] px-1 text-[#463AA1]">
                                $ {price}
                              </div>
                              <button
                                onClick={() =>
                                  addToCart({ id, title, price, images })
                                }
                                className="btn w-[111px] p-[7.5px] min-h-0 mb-2"
                              >
                                <p className="text-[#463AA1] font-[Segoe UI]">
                                  Add To Cart
                                </p>
                              </button>
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
        <div className="flex items-center justify-center pb-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="btn btn-primary mr-2"
          >
            Prev
          </button>
          <span className="mx-2">
            Page {currentPage} of {Math.ceil(data.total / productsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(data.total / productsPerPage)}
            className="btn btn-primary ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
