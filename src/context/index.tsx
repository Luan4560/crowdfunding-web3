import { ReactNode, createContext, useContext } from "react";
import {
  useAddress,
  useContract,
  useConnect,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

interface StateContextProviderType {
  children: ReactNode;
}

interface publishCampaignType {
  form: {
    title: string;
    description: string;
    target: number;
    deadline: string;
    image: string;
  }
}

const StateContext = createContext<StateContextProviderType | any>(null);

export const StateContextProvider = ({ children }: StateContextProviderType) => {
  const { contract } = useContract(
    "0xA48466FE563BcfBD8c5178437cEEfe79F7046da3"
  );

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useConnect();

  const publishCampaign = async ({ form }: publishCampaignType) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ] as any);

      console.log("Contract call success", data);
    } catch (err) {
      console.log("Contract call failure", err);
    }
  };

  return (
    <StateContext.Provider value={{
      address,
      contract,
      createCampaign: publishCampaign,
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
}