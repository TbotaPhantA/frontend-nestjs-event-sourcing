"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableMovements from "@/components/Tables/TableMovements";

const WarehousePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Движения" />
      <div className="flex min-h-screen flex-col gap-10">
        <TableMovements />
      </div>
    </DefaultLayout>
  );
};

export default WarehousePage;
