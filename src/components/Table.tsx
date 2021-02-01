import { ReactNode } from "react";
import { capitalize } from "../utils/string-utils";

const Table = <TableItem,>({
    headers,
    items,
    render
}: {
    headers: string[];
    items: TableItem[];
    render: (item: TableItem) => ReactNode
}) => (
    <>
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{capitalize(header)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        {render(item)}
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

export default Table;