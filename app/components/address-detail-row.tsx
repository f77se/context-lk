import { memo, useEffect, useState } from "react";
import type { Address, AddressDetail } from "~/lib/data";
import { StatusLight } from "./status-light";
import { useAddressDetail } from "~/lib/detail-context";

type Props = {
  address: Address;
};

function AddressDetailRow({ address }: Props) {
  const { getDetail } = useAddressDetail();
  const [details, setDetails] = useState<AddressDetail | undefined>();

  useEffect(() => {
    let isMounted = true; // Prevent state updates on unmounted components

    async function fetchDetails() {
      const d = await getDetail(address.id);
      if (isMounted) setDetails(d);
    }

    fetchDetails();

    return () => {
      isMounted = false; // Cleanup function
    };
  }, [address.id, getDetail]); // Only re-run if the `id` changes

  return (
    <div className="flex flex-row grid-cols-[1fr_2fr_1fr_auto] gap-4 my-2 border-b pb-1">
      <StatusLight a={details?.a || undefined} b={details?.b || undefined} />
      <div>{`${address.street} ${address.streetno}`}</div>
      <div>{address.id}</div>
    </div>
  );
}

export default memo(AddressDetailRow);
