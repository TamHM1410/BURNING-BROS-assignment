import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";
interface ChildrenType {
  children: ReactNode;
}
const queryClient = new QueryClient();

const CustomQueryClientProvider = ({ children }: ChildrenType) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default CustomQueryClientProvider;
