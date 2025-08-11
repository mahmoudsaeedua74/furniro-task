"use client";
import Image from "next/image";
import ShareIcon from "../icons/ShareIcon";
import CompareIcon from "../icons/CompareIcon";
import HeartIcon from "../icons/HeartIcon";
import Badge from "./Badge";
import { Button } from "./button";
import toast from "react-hot-toast";
import { Product } from "@/utils/interface";

type ProductCardProps = {
  product: Product;
  viewMode?: "grid" | "list";
};

export default function ProductCard({
  product,
  viewMode = "grid",
}: ProductCardProps) {
  const handleAddToCart = () => {
    setTimeout(() => {
      toast.loading("Added to cart........");
      setTimeout(() => {
        toast.dismiss();
        setTimeout(() => {
          toast.success("Added to cart!");
        }, 200);
      }, 500);
    }, 200);
  };

  const handleShare = () => {
    setTimeout(() => {
      toast.success("Shared!");
    }, 200);
  };

  const handleCompare = () => {
    setTimeout(() => {
      toast.loading("Added to compare.......");
      setTimeout(() => {
        toast.dismiss();
        setTimeout(() => {
          toast.success("Added to compare!");
        }, 200);
      }, 500);
    }, 200);
  };

  const handleLike = () => {
    setTimeout(() => {
      toast.loading("Added to Liked........");
      setTimeout(() => {
        toast.dismiss();
        setTimeout(() => {
          toast.success("Liked!");
        }, 200);
      }, 500);
    }, 200);
  };

  return (
    <div
      className={
        viewMode === "list"
          ? "w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col sm:flex-row"
          : "relative w-[285px] h-[446px] bg-[#F4F5F7] cursor-pointer group"
      }
    >
      {/* Image Section */}
      <div
        className={
          viewMode === "list"
            ? "relative w-full sm:w-80 h-64 sm:h-56 flex-shrink-0"
            : "relative w-[285px] h-[301px]"
        }
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes={
            viewMode === "list" ? "(max-width: 640px) 100vw, 320px" : "285px"
          }
          className="object-cover"
        />
        {product.badge && (
          <div className={viewMode === "list" ? "absolute top-0 left-10" : ""}>
            <Badge text={product.badge} />
          </div>
        )}

        {/* Add to Cart Button - always visible in list mode */}
        {viewMode === "list" && (
          <div className="absolute bottom-4 left-4">
            <Button
              variant="addToCart"
              size="addToCart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div
        className={
          viewMode === "list"
            ? "flex-1 p-6 flex flex-col justify-between"
            : "w-[285px] h-[145px] px-5 pt-4 flex flex-col gap-2"
        }
      >
        <div>
          <h3
            className={
              viewMode === "list"
                ? "font-poppins font-bold text-xl sm:text-2xl text-gray-900 leading-tight"
                : "font-poppins font-semibold text-[24px] text-[#333333]"
            }
          >
            {product.title}
          </h3>
          <p
            className={
              viewMode === "list"
                ? "font-poppins text-gray-600 mt-2 text-sm sm:text-base leading-relaxed"
                : "font-poppins font-medium text-[#666666] mt-1"
            }
          >
            {product.description}
          </p>
        </div>

        <div
          className={
            viewMode === "list"
              ? "flex items-baseline gap-3"
              : "flex items-center gap-2 mt-2"
          }
        >
          <span
            className={
              viewMode === "list"
                ? "font-poppins font-bold text-2xl text-gray-900"
                : "font-poppins font-semibold text-[20px] text-[#333333]"
            }
          >
            ${product.finalPrice.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span
              className={
                viewMode === "list"
                  ? "font-poppins text-gray-400 line-through text-lg"
                  : "font-poppins font-normal text-[#999999] line-through"
              }
            >
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {viewMode === "list" ? (
          <div className="flex items-center gap-5 font-poppins font-semibold">
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-primary transition"
              onClick={handleShare}
            >
              <ShareIcon className="size-4" />
              Share
            </button>
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-primary transition"
              onClick={handleCompare}
            >
              <CompareIcon className="size-4" />
              Compare
            </button>
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-primary transition"
              onClick={handleLike}
            >
              <HeartIcon className="size-4" />
              Like
            </button>
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 text-white px-4">
            <Button
              variant="addToCart"
              size="addToCart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            <div className="flex items-center gap-5 font-poppins font-semibold">
              <button
                className="flex items-center gap-2 cursor-pointer hover:text-primary transition"
                onClick={handleShare}
              >
                <ShareIcon className="size-4" />
                Share
              </button>
              <button
                className="flex items-center gap-2 cursor-pointer hover:text-primary transition"
                onClick={handleCompare}
              >
                <CompareIcon className="size-4" />
                Compare
              </button>
              <button
                className="flex items-center gap-2 cursor-pointer hover:text-primary transition"
                onClick={handleLike}
              >
                <HeartIcon className="size-4" />
                Like
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
