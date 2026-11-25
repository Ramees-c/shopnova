"use client";

import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

export function SetupCheck() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-lg"
    >
      <ShoppingBag className="size-6 text-indigo-600" aria-hidden="true" />
      <span className="text-lg font-semibold text-neutral-900">ShopNova setup works</span>
    </motion.div>
  );
}
