import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { StatusPie } from "~/components/charts/StatusPie";
import { ConnectionsCard, DarkFiberCard } from "~/components/cards";
import { getAddresses } from "~/lib/api";
import AddressDetailRow from "~/components/address-detail-row";
import { Input } from "~/components/ui/input";
import React, { useEffect, useState } from "react";
import { AddressDetailProvider } from "~/lib/detail-context";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader = async () => {
  const data = (await getAddresses()).sort((a, b) =>
    a.street.localeCompare(b.street)
  );

  return {
    data,
  };
};

export default function Home({ loaderData: { data } }: Route.ComponentProps) {
  const [filteredData, setFilteredData] = useState(data);
  const [filterString, setFilterString] = useState("");
  const darkFibers = data.filter((item) => item.id.startsWith("1")).length;

  useEffect(() => {
    const filterData = () => {
      if (filterString.length > 1) {
        setFilteredData(
          filteredData.filter(
            (item) =>
              item.id
                .toLocaleLowerCase()
                .includes(filterString.toLocaleLowerCase()) ||
              `${item.street.toLocaleLowerCase()} ${item.streetno}`.startsWith(
                filterString.toLocaleLowerCase()
              )
          )
        );
      } else {
        setFilteredData(data);
      }
    };

    filterData();
  }, [filterString, filteredData]);

  return (
    <div className="flex flex-col gap-8 mx-auto max-w-5xl">
      <div className="grid grid-cols-3 gap-8">
        <ConnectionsCard connections={data.length} />
        <DarkFiberCard connections={darkFibers} />
        <StatusPie />
      </div>
      <div>
        <Input
          value={filterString}
          placeholder="Filter on street or id"
          onChange={(e) => setFilterString(e.target.value)}
        />
      </div>
      <div>
        {filteredData.map((item) => (
          <AddressDetailRow address={item} />
        ))}
      </div>
    </div>
  );
}
