import React, { FC, JSX } from "react";
import { Toaster } from "react-hot-toast";
import { JobContextProvider } from "./modules/jobs/context";

export const combineContext = (
  ...components: FC[]
): FC<{ children?: React.ReactNode }> => {
  const CombinedComponent = components.reduce(
    (
      AccumulatedComponents: FC<{ children?: React.ReactNode }>,
      CurrentComponent: FC<{ children?: React.ReactNode }>
    ) => {
      const WrapperComponent: FC<{ children?: React.ReactNode }> = ({
        children,
      }): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };

      // Assign a displayName to the WrapperComponent
      WrapperComponent.displayName = `Combined(${
        CurrentComponent.displayName || CurrentComponent.name || "Unknown"
      })`;

      return WrapperComponent;
    },
    ({ children }: { children?: React.ReactNode }) => (
      <>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
            },
          }}
        />
      </>
    )
  );

  return CombinedComponent;
};

const providers = [JobContextProvider] as unknown as FC[];
export const AppContextProvider = combineContext(...providers);
