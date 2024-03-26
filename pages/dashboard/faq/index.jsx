import LayoutAdmin from "@/components/layouts/admin/layout"
import { useState } from "react";

export default function Catalog() {

  return (
    <LayoutAdmin>
        <div className="max-w-xxl xl:mx-2 rounded overflow-hidden shadow-lg p-5">
             <h2 className="font-bold text-2xl">Katalog</h2>
        </div>
    </LayoutAdmin>
  );
}
