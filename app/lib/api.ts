import {
  addresses,
  addressDetails,
  type Address,
  type AddressDetail,
} from "~/lib/data";
import { delay } from "./delay";

export const getAddresses = async (): Promise<Address[]> => {
  await delay(700);
  return addresses;
};

export const getAddressDetails = async (
  id: string
): Promise<AddressDetail | undefined> => {
  const randomDelay = Math.floor(Math.random() * (3000 - 300 + 1)) + 300;
  await delay(randomDelay);
  return addressDetails.find((address) => address.id === id);
};
