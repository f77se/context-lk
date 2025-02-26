import { createContext, useContext, useState } from "react";
import type { AddressDetail } from "~/lib/data";
import { getAddressDetails } from "~/lib/api";

type AddressDetailCache = Map<string, AddressDetail>;

type AddressDetailContextType = {
  getDetail: (id: string) => Promise<AddressDetail | undefined>;
  getCache: () => AddressDetailCache; // New function to get full cache
};

const AddressDetailContext = createContext<AddressDetailContextType | null>(
  null
);

export function AddressDetailProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState<AddressDetailCache>(new Map());

  // Fetch and cache the address detail
  const getDetail = async (id: string) => {
    if (cache.has(id)) {
      return cache.get(id);
    }
    const detail = await getAddressDetails(id);
    if (detail) {
      cache.set(id, detail);
    }
    return detail;
  };

  // Function to return the full cache
  const getCache = () => cache;

  return (
    <AddressDetailContext.Provider value={{ getDetail, getCache }}>
      {children}
    </AddressDetailContext.Provider>
  );
}

// Hook to fetch a single address detail
export function useAddressDetail() {
  const context = useContext(AddressDetailContext);
  if (!context) {
    throw new Error(
      "useAddressDetail must be used within an AddressDetailProvider"
    );
  }
  return context;
}

// Hook to get the full address details cache (for analytics, charts, etc.)
export function useAddressDetailCache() {
  const context = useContext(AddressDetailContext);
  if (!context) {
    throw new Error(
      "useAddressDetailCache must be used within an AddressDetailProvider"
    );
  }
  return context.getCache();
}
