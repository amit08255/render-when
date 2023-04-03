/* eslint-disable react/jsx-no-useless-fragment */
import React, { memo, useMemo } from "react";

type WhenProps = React.PropsWithChildren<{
  condition?: boolean;
  limit?: number;
}>;

const Wrapper: React.FC<WhenProps> = memo(
  ({ limit = 1, condition = true, children }) => {
    const list = useMemo(() => {
      return React.Children.map(children, (child) => {
        const { condition: childCondition } = child?.props || {};

        if (childCondition && list.length < limit) {
          return child;
        }
      });
    }, [children, limit]);

    if (!condition) {
      return null;
    }

    return <>{list}</>;
  }
);

const If: React.FC<WhenProps> = memo(({ children }) => {
  return children;
});

export default { Wrapper, If };
