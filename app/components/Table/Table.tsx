'use client'
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Spinner from '../Spinner/Spinner';

export interface TableProps<T extends { id: number }> { // Garantindo que T tenha a propriedade id
  data: T[];
  columns: { key: keyof T; header: string }[];
  fetchData: (page: number, limit: number) => Promise<T[]>;
  totalItems: number;
  pageSize?: number;
  checkbox?: boolean;
  onSelectRows?: (selected: T[]) => void; 
}

function Table<T extends { id: number }>({ 
  data,
  columns,
  fetchData,
  totalItems,
  pageSize = 5,
  checkbox = false,
  onSelectRows,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState<T[]>(data);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(pageSize);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<number>>(new Set());

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const loadPageData = async () => {
      setLoading(true);
      const newData = await fetchData(currentPage, itemsPerPage);
      setTableData(newData);
      setLoading(false);
    };
    loadPageData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (onSelectRows) {
      const selectedRows = tableData.filter(row => selectedRowIds.has(Number(row.id)));
      // const arrayFromSet: number[] = Array.from(selectedRowIds);
      // onSelectRows(arrayFromSet as unknown as T[]);
      onSelectRows(selectedRows);
    }
  }, [tableData, selectedRowIds]);

  const handleCheckboxChange = (id: number) => {
    const newSelectedRowIds = new Set(selectedRowIds);
    if (newSelectedRowIds.has(id)) {
      newSelectedRowIds.delete(id); 
    } else {
      newSelectedRowIds.add(id); 
    }
    setSelectedRowIds(newSelectedRowIds);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(e.target.value, 10);
    setItemsPerPage(newPageSize);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 text-gray-700 bg-slate-200 rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        {/* <span className="text-sm font-semibold text-gray-600">Exibir:</span> */}
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="p-2 bg-gray-300 rounded-xl"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className={`overflow-x-auto max-h-[50vh] min-h-[50vh] ${loading ? "overflow-hidden" : "overflow-y-auto"}`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white sticky top-0 z-10">
              {checkbox && <th className="p-4"></th>} {/* Coluna para checkbox */}
              {columns.map((col) => (
                <th key={String(col.key)} className="p-4 text-left text-sm uppercase">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (checkbox ? 1 : 0)} className="text-center p-6 h-[45vh] w-full">
                  <Spinner />
                </td>
              </tr>
            ) : (
              tableData.map((row) => (
                <tr key={row.id} className="hover:bg-indigo-100 transition-colors">
                  {checkbox && (
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedRowIds.has(Number(row.id))}
                        onChange={() => handleCheckboxChange(Number(row.id))}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={String(col.key)} className="p-4 text-sm">
                      {String(row[col.key])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-6 gap-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md disabled:bg-gray-300"
        >
          <FaChevronLeft className="mr-2" />
        </button>
        <span className="text-sm text-gray-500 font-bold">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md disabled:bg-gray-300"
        >
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Table;