"use client";

import useCartStore from "@/stores/cartStores";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  SelectedSize,
  SelectedColor,
}: {
  product: ProductType;
  SelectedSize: string;
  SelectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleTypeChange = (type: "size" | "color", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      SelectedColor,
      SelectedSize,
    });
    toast.success("Product added to cart!");
  }
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Size */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <button
              className={`cursor-pointer p-[2px] border ${
                SelectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              onClick={() => handleTypeChange("size", size)}
              key={size}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  SelectedSize === size && "bg-black text-white"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <button
              className={`cursor-pointer p-[2px] border ${
                SelectedColor === color ? "border-gray-300" : "border-white"
              }`}
              onClick={() => handleTypeChange("color", color)}
              key={color}
            >
              <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
            </button>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border border-gray-500 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border border-gray-500 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Buttons */}
      <button onClick={handleAddToCart} className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm cursor-pointer font-medium">
        <ShoppingCart className="w-4 h-4" />
        Buy this Item
      </button>
    </div>
  );
};

export default ProductInteraction;
