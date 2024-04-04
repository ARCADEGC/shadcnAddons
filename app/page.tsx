import React from "react";
import Link from "next/link";

import { Typography } from "@/components/ui/TypographyCommunity";

export default function Home(): React.ReactElement {
    return (
        <main className="mx-auto mb-20 mt-16 grid max-w-prose gap-4 [grid-column:content]">
            <Typography
                variant="h1"
                affects="small"
            >
                Level one heading
            </Typography>
            <Typography variant="h2">Level two heading</Typography>
            <Typography variant="h3">Level three heading</Typography>
            <Typography variant="h4">Level four heading</Typography>
            <Typography variant="p">Paragraph text</Typography>
            <Typography
                variant="anchor"
                asChild
            >
                <Link href="#">a brilliant plan</Link>
            </Typography>
            <Typography variant="blockquote">Blockquote text</Typography>
            <Typography variant="list">
                <li>List item</li>
            </Typography>
            <Typography variant="code">Inline Code</Typography>
            <Typography affects="lead">Lead Text</Typography>
            <Typography affects="muted">Muted text</Typography>
            <Typography variant="large">large text</Typography>
            <Typography affects="small">small text</Typography>
            <Typography variant="table">
                <thead>
                    <tr>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Table data</td>
                    </tr>
                </tbody>
            </Typography>
        </main>
    );
}
