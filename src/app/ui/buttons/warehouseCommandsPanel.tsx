import Link from "next/link";

const WarehouseCommandsPanel = () => {
  return (
    <div className="flex justify-end gap-5 pb-4 xl:gap-5">
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Filter
      </Link>

      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Add item
      </Link>
    </div>
  );
};

export default WarehouseCommandsPanel;
