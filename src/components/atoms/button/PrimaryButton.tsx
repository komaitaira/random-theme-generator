import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
};

export const PrimaryButton: VFC<Props> = (props) => {
    const { children } = props;
    return <button>{children}</button>;
};
