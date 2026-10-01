import { useEffect, useRef, useState } from "react"
import {
  ShoppingBag,
  Headphones,
  Plus,
  Minus,
  RotateCcw,
  User,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const PRICE = 25

function App() {
  const [quantity, setQuantity] = useState(0)
  const [customerName, setCustomerName] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const nameInputRef = useRef<HTMLInputElement>(null)

  const total = quantity * PRICE

  useEffect(() => {
    document.title = `Cart: ${quantity} ${quantity === 1 ? "Item" : "Items"}`
  }, [quantity])

  const addItem = () => {
    setQuantity((prev) => prev + 1)
  }

  const removeItem = () => {
    setQuantity((prev) => Math.max(0, prev - 1))
  }

  const resetCart = () => {
    setQuantity(0)
  }

  const getMessage = () => {
    if (quantity === 0) return "Your cart is empty"
    if (quantity <= 4) return "Items added to cart"
    return "Bulk Order 🎉"
  }

  return (
    <main
      className={`relative min-h-screen overflow-hidden px-4 py-10 transition-colors duration-700 ${
        darkMode ? "bg-[#0d0b16]" : "bg-[#f8f7fc]"
      }`}
    >
      {/* Background decorations */}
      <div
        className={`pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl transition-colors duration-700 ${
          darkMode ? "bg-violet-900/30" : "bg-violet-200/50"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl transition-colors duration-700 ${
          darkMode ? "bg-fuchsia-900/20" : "bg-orange-200/50"
        }`}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
        <Card
          className={`animate-fade-up w-full max-w-4xl overflow-hidden rounded-[32px] border p-0 shadow-[0_30px_90px_rgba(50,35,90,0.18)] backdrop-blur-xl transition-all duration-700 ${
            darkMode
              ? "border-white/10 bg-[#17141f]/95"
              : "border-white/80 bg-white/90"
          }`}
        >
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* LEFT PRODUCT SECTION */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#17142d] via-[#2c2255] to-[#7048df] p-8 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative flex min-h-[520px] flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShoppingBag className="h-5 w-5" />
                    <span>Shoply</span>
                  </div>

                  {quantity > 0 && (
                    <Badge className="border border-white/10 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/20">
                      In Cart
                    </Badge>
                  )}
                </div>

                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <div className="group relative mb-8">
                    <div className="absolute inset-0 rounded-full bg-violet-300/30 blur-3xl transition-all duration-500 group-hover:scale-125" />

                    <div className="animate-soft-float relative flex h-44 w-44 items-center justify-center rounded-[45px] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:rotate-3 group-hover:bg-white/15">
                      <Headphones
                        className="h-28 w-28 text-white"
                        strokeWidth={1.2}
                      />
                    </div>
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-200">
                    Premium Audio
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight">
                    Wireless
                    <br />
                    Headphones
                  </h1>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                    Crisp sound, wireless freedom and comfort made for everyday
                    listening.
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs text-white/50">Price per item</p>
                    <p className="mt-1 text-3xl font-bold">$25</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-right backdrop-blur-md">
                    <p className="text-xs text-white/50">Selected</p>
                    <p className="font-semibold">
                      {quantity} {quantity === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CART SECTION */}
            <div
              className={`flex flex-col p-8 transition-colors duration-700 sm:p-10 ${
                darkMode
                  ? "bg-[#17141f] text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              {/* Theme toggle */}
              <div className="mb-6 flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDarkMode((prev) => !prev)}
                  className={`rounded-full px-4 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-white/10 bg-white/10 text-white hover:bg-white/20"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {darkMode ? (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-violet-500">
                  ✦ Your Shopping Cart
                </p>

                <h2
                  className={`text-3xl font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Build your order
                </h2>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Add your name and choose how many headphones you'd like.
                </p>
              </div>

              {/* CUSTOMER NAME */}
              <div className="mt-8">
                <label
                  className={`mb-2 block text-sm font-semibold ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Customer Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <Input
                    ref={nameInputRef}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className={`h-12 rounded-xl pl-11 transition-all duration-300 ${
                      darkMode
                        ? "border-white/10 bg-white/5 text-white placeholder:text-slate-500 hover:border-violet-500/50 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                        : "border-slate-200 bg-slate-50 text-slate-900 hover:border-violet-300 hover:bg-white focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                    }`}
                  />
                </div>

                <Button
                  variant="ghost"
                  onClick={() => nameInputRef.current?.focus()}
                  className="mt-2 h-8 px-2 text-xs font-semibold text-violet-500 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  Focus Customer Name
                </Button>
              </div>

              {/* QUANTITY */}
              <div
                className={`mt-6 rounded-2xl border p-5 transition-colors duration-700 ${
                  darkMode
                    ? "border-white/10 bg-white/5"
                    : "border-slate-100 bg-slate-50"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      Quantity
                    </p>

                    <p
                      className={`text-xs ${
                        darkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Choose your items
                    </p>
                  </div>

                  <div
                    key={quantity}
                    className={`quantity-pop text-5xl font-bold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {quantity}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={removeItem}
                    disabled={quantity === 0}
                    className={`h-12 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 disabled:hover:translate-y-0 ${
                      darkMode
                        ? "border-white/10 bg-white/5 text-slate-200 hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-300"
                        : "bg-white hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                    }`}
                  >
                    <Minus />
                    Remove
                  </Button>

                  <Button
                    onClick={addItem}
                    className="h-12 rounded-xl bg-slate-900 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:shadow-violet-300/30"
                  >
                    <Plus />
                    Add Item
                  </Button>
                </div>
              </div>

              {/* CART MESSAGE */}
              <div
                className={`mt-5 flex items-center justify-between rounded-2xl border px-5 py-4 transition-colors duration-700 ${
                  darkMode
                    ? "border-violet-500/20 bg-violet-500/10"
                    : "border-violet-100 bg-violet-50"
                }`}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-violet-500">
                    Cart Status
                  </p>

                  <p
                    className={`mt-1 font-semibold ${
                      darkMode ? "text-slate-100" : "text-slate-800"
                    }`}
                  >
                    {getMessage()}
                  </p>
                </div>

                {quantity > 0 && (
                  <Badge className="bg-violet-600 text-white hover:bg-violet-600">
                    In Cart
                  </Badge>
                )}
              </div>

              {/* TOTAL */}
              <div
                className={`mt-6 flex items-end justify-between border-t border-dashed pt-6 ${
                  darkMode ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Order Total
                  </p>

                  <p
                    className={`text-xs ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    $25 × {quantity}
                  </p>
                </div>

                <p
                  className={`text-4xl font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  ${total}
                </p>
              </div>

              {/* RESET */}
              <Button
                variant="ghost"
                onClick={resetCart}
                disabled={quantity === 0}
                className={`mt-6 w-full rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "text-slate-400 hover:bg-white/5 hover:text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <RotateCcw />
                Reset Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default App;